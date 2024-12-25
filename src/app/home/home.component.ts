import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { map, Observable } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MatIcon, MatMiniFabButton, MatTabGroup, MatTab],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  coursesService = inject(CoursesService);
  begginerCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;

  ngOnInit() {
    const courses$ = this.coursesService.findAllCourses();
    this.begginerCourses$ = courses$.pipe(
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
