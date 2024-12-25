import { Component } from '@angular/core';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperNext,
  MatStepperPrevious,
} from '@angular/material/stepper';
import { CreateCourseStep1Component } from './create-course-step-1/create-course-step-1.component';
import { CreateCourseStep2Component } from './create-course-step-2/create-course-step-2.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    MatStepLabel,
    CreateCourseStep1Component,
    CreateCourseStep2Component,
    MatButton,
    MatStepperNext,
    MatStepperPrevious,
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss',
})
export class CreateCourseComponent {}
