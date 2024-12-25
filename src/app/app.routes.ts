import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses/:id', component: CourseComponent },
  {
    path: 'add-new-course',
    component: CreateCourseComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
