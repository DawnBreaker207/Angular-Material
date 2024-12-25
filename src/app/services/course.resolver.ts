import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

export const courseResolver = (
  route,
  state,
): Observable<Course> => {
  const courseService = inject(CoursesService);

  return courseService.findCourseByID(route.params['id']);
};
