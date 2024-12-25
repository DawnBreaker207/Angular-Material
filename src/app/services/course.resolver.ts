import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

export const courseResolver = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<Course> => {
  const courseService = inject(CoursesService);
  return courseService.findCourseById(route.params['id']);
};
