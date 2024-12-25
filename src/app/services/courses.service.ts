import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';
import { ResAPI } from '../model/resAPI';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  findCourseById(courseId: number): Observable<Course> {
    return this.http
      .get<Course>(`${this.baseUrl}/api/courses/${courseId}`)
      .pipe(map((res) => res));
  }

  findAllCourses(): Observable<Course[]> {
    return this.http
      .get<ResAPI<Course[]>>(`${this.baseUrl}/api/courses`)
      .pipe(map((res) => res.payload));
  }

  findAllCoursesLessons(courseId: number): Observable<Lesson[]> {
    return this.http
      .get<ResAPI<Lesson[]>>(`${this.baseUrl}/api/lessons`, {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('pageNumber', '0')
          .set('pageSize', '1000'),
      })
      .pipe(map((res) => res.payload));
  }

  findLessons(
    courseId: number,
    sortOrder = 'asc',
    pageNumber = 0,
    pageSize = 3,
    sortColumn = 'seqNo',
  ): Observable<Lesson[]> {
    return this.http
      .get<ResAPI<Lesson[]>>(`${this.baseUrl}/api/lessons`, {
        params: new HttpParams()
          .set('courseId', courseId.toString())
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
          .set('sortColumn', sortColumn),
      })
      .pipe(map((res) => res.payload));
  }
}
