import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CoursesService } from './courses.service';

export const courseResolver = (
  route: ActivatedRouteSnapshot,
  // state,
) => {
  const courseService = inject(CoursesService);
  return courseService.findCourseByID(route.params['id']);
};
