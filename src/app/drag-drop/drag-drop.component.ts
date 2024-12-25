import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Lesson } from '../model/lesson';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [
    NgForOf,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    CdkDropListGroup,
  ],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss',
})
export class DragDropComponent {
  lessons: Lesson[] = [
    {
      id: 120,
      descriptions: 'Introduction to Angular Material',
      duration: '4:17',
      seqNo: 1,
      courseId: 11,
    },
    {
      id: 121,
      descriptions: 'Navigation and Containers',
      duration: '6:37',
      seqNo: 2,
      courseId: 11,
    },
    {
      id: 122,
      descriptions: 'Data Tables',
      duration: '8:03',
      seqNo: 3,
      courseId: 11,
    },
    {
      id: 123,
      descriptions: 'Dialogs and Overlays',
      duration: '11:46',
      seqNo: 4,
      courseId: 11,
    },
    {
      id: 124,
      descriptions: 'Commonly used Form Controls',
      duration: '7:17',
      seqNo: 5,
      courseId: 11,
    },
    {
      id: 125,
      descriptions: 'Drag and Drop',
      duration: '8:16',
      seqNo: 6,
      courseId: 11,
    },
    {
      id: 126,
      descriptions: 'Responsive Design',
      duration: '7:28',
      seqNo: 7,
      courseId: 11,
    },
    {
      id: 127,
      descriptions: 'Tree Component',
      duration: '11:09',
      seqNo: 8,
      courseId: 11,
    },
    {
      id: 128,
      descriptions: 'Virtual Scrolling',
      duration: '3:44',
      seqNo: 9,
      courseId: 11,
    },
    {
      id: 129,
      descriptions: 'Custom Themes',
      duration: '8:55',
      seqNo: 10,
      courseId: 11,
    },
    {
      id: 130,
      descriptions: 'Changing Theme at Runtime',
      duration: '12:37',
      seqNo: 11,
      courseId: 11,
    },
  ];
  done: Lesson[] = [];

  dropMultiList(event: CdkDragDrop<Lesson[]>) {
    if (event.previousContainer == event.container) {
      moveItemInArray(this.lessons, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  drop(event: CdkDragDrop<Lesson[]>) {
    moveItemInArray(this.lessons, event.previousIndex, event.currentIndex);
  }
}
