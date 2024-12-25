import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { HomeComponent } from './home/home.component';
import { courseResolver } from './services/course.resolver';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: { course: courseResolver },
  },
  {
    path: 'add-new-course',
    component: CreateCourseComponent,
  },
  { path: 'drag-drop-example', component: DragDropComponent },
  { path: 'tree-demo', component: TreeDemoComponent },
  { path: 'virtual-scrolling', component: VirtualScrollingComponent },
  {
    path: '**',
    redirectTo: '/',
  },
];
