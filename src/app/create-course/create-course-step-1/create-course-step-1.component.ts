import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatCalendarCellClassFunction,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import {
  MatError,
  MatFormField,
  MatHint,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';

const SAMPLE_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae facere illo ipsum itaque, libero maiores minus nostrum odio odit quo?';

@Component({
  selector: 'app-create-course-step-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatRadioGroup,
    MatRadioButton,
    MatSelect,
    MatOption,
    MatOptgroup,
    MatDatepicker,
    MatDatepickerToggle,
    MatSuffix,
    MatDatepickerInput,
    MatCheckbox,
    CdkTextareaAutosize,
    MatHint,
    NgIf,
  ],
  templateUrl: './create-course-step-1.component.html',
  styleUrl: './create-course-step-1.component.scss',
})
export class CreateCourseStep1Component {
  fb = inject(UntypedFormBuilder);
  startDate = new Date(1990, 0, 1);

  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
    ],
    releasedAt: [this.startDate, Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [
      SAMPLE_TEXT,
      [Validators.required, Validators.minLength(3)],
    ],
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const date = cellDate.getDate();
    if (view === 'month') {
      return date === 1 ? 'highlight-date' : '';
    }
    return '';
  };

  get courseTitle() {
    return this.form.controls['title'];
  }
}
