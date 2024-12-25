import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { EMPTY, map, Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { CoursesCardListComponent } from '../courses-card-list/courses-card-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatMiniFabButton,
    MatTabGroup,
    MatTab,
    CoursesCardListComponent,
    AsyncPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  coursesService = inject(CoursesService);
  beginnerCourses$: Observable<Course[]> = EMPTY;
  advancedCourses$: Observable<Course[]> = EMPTY;

  ngOnInit() {
    const courses$ = this.coursesService.findAllCourses();
    this.beginnerCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'BEGINNER'),
      ),
    );
    this.advancedCourses$ = courses$.pipe(
      map((courses) =>
        courses.filter((course) => course.category === 'ADVANCED'),
      ),
    );
  }
}
