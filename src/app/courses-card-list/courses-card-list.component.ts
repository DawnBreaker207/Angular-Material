import { NgForOf } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle,
} from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Course } from '../model/course';
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-card-list',
  standalone: true,
  imports: [
    MatCard,
    NgForOf,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink,
    MatCardTitle,
    MatCard,
  ],
  templateUrl: './courses-card-list.component.html',
  styleUrl: './courses-card-list.component.scss',
})
// implements OnInit
export class CoursesCardListComponent {
  dialog = inject(MatDialog);
  courses = input.required<Course[] | null>();

  // ngOnInit() {}

  editCourse(course: Course) {
    openEditCourseDialog(this.dialog, course)
      .pipe(filter((val) => !!val))
      .subscribe((val) => console.log(`New course value: ${val}`));
  }
}
