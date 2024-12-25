import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { Lesson } from '../model/lesson';
import { catchError, finalize, merge, tap, throwError } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatRow,
    MatRowDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatProgressSpinner,
    NgIf,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatCheckbox,
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements OnInit, AfterViewInit {
  route = inject(ActivatedRoute);
  coursesService = inject(CoursesService);
  course!: Course;
  lessons: Lesson[] = [];
  loading: boolean = false;
  displayedColumns = ['select', 'seqNo', 'description', 'duration'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  expandedLesson!: Lesson = null;
  selection = new SelectionModel<Lesson>(true, []);

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    this.loadLessonsPage();
  }

  loadLessonsPage() {
    this.loading = true;
    this.coursesService
      .findLessons(
        this.course.id,
        this.sort?.direction ?? 'asc',
        this.paginator?.pageIndex ?? 0,
        this.paginator?.pageSize ?? 3,
        this.sort?.active ?? 'seqNo',
      )
      .pipe(
        tap(
          (lessons) => (this.lessons = lessons),
          catchError((err) => {
            console.log(`Error loading lessons ${err}`);
            alert('Error loading lessons');
            return throwError(err);
          }),
        ),
        finalize(() => (this.loading = false)),
      )
      .subscribe();
  }

  onToggleLesson(lesson: Lesson) {
    if (lesson === this.expandedLesson) {
      this.expandedLesson = null;
    } else {
      this.expandedLesson = lesson;
    }
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadLessonsPage()))
      .subscribe();
  }

  onLessonToggled(lesson: Lesson) {
    this.selection.toggle(lesson);
    console.log(this.selection.selected);
  }

  isAllSelected() {
    return (this.selection.selected?.length = this.lessons?.length);
  }

  toggleAll() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.selected(...this.lessons);
    }
  }
}
