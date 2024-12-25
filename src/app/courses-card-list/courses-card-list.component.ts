import { NgForOf } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
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
import { openEditCourseDialog } from '../course-dialog/course-dialog.component';
import { filter } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './courses-card-list.component.html',
  styleUrl: './courses-card-list.component.scss',
})
// implements OnInit
export class CoursesCardListComponent implements OnInit {
  private dialog = inject(MatDialog);
  private responsive!: BreakpointObserver;
  courses = input.required<Course[] | null>();
  cols = 3;
  rowHeight = '500px';
  handsetPortrait = false;

  ngOnInit() {
    this.responsive
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        this.cols = 3;
        this.rowHeight = '500px';
        this.handsetPortrait = false;
        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1;
          this.rowHeight = '430px';
          this.handsetPortrait = true;
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 1;
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2;
        }
      });
  }

  editCourse(course: Course) {
    openEditCourseDialog(this.dialog, course)
      .pipe(filter((val) => !!val))
      .subscribe((val) => console.log(`New course value: ${val}`));
  }
}
