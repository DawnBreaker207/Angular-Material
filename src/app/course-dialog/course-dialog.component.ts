import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogConfig,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Course } from '../model/course';
import { MatSuffix } from '@angular/material/form-field';

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatSelect,
    MatFormField,
    MatOption,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatSuffix,
  ],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent implements OnInit {
  description = '';
  form = this.fb.group({
    description: [this.course.description, Validators.required],
    category: [this.course.category, Validators.required],
    releasedAt: [new Date(), Validators.required],
    longDescription: [this.course.longDescription, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private course: Course,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
  ) {
    this.description = course.description;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}

export function openEditCourseDialog(dialog: MatDialog, course: Course) {
  const config = new MatDialogConfig();

  config.disableClose = true;
  config.autoFocus = true;

  config.data = {
    ...course,
  };

  const dialogRef = dialog.open(CourseDialogComponent, config);

  return dialogRef.afterClosed();
}
