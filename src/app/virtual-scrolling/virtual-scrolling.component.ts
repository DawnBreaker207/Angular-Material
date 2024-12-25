import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scrolling',
  standalone: true,
  imports: [
    MatList,
    MatListItem,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
  ],
  templateUrl: './virtual-scrolling.component.html',
  styleUrl: './virtual-scrolling.component.scss',
})
export class VirtualScrollingComponent {
  items = Array.from({ length: 10000 }).map((value, i) => `Item #${i}`);
}
