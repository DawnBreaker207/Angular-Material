import { Component, input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitleGroup,
} from '@angular/material/card';
import { NgForOf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

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
    MatCardTitleGroup,
  ],
  templateUrl: './courses-card-list.component.html',
  styleUrl: './courses-card-list.component.scss',
})
export class CoursesCardListComponent implements OnInit {
  courses = input.required<Course[] | null>();

  ngOnInit() {}

  editCourse(course: Course) {}
}
