import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-virtual-scrolling',
  standalone: true,
  imports: [MatList, MatListItem],
  templateUrl: './virtual-scrolling.component.html',
  styleUrl: './virtual-scrolling.component.scss',
})
export class VirtualScrollingComponent {
  items = Array.from({ length: 100 }).map((value, i) => `Item #${i}`);
}
