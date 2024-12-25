import { NgForOf } from '@angular/common';
import { Component, input } from '@angular/core';
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
  courses = input.required<Course[] | null>();

  // ngOnInit() {}

  // editCourse(course: Course) {}
}
