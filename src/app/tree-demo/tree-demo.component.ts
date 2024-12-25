import { Component, OnInit } from '@angular/core';

interface CourseNode {
  name: string;
  children?: CourseNode[];
}

const TREE_DATA: CourseNode[] = [
  {
    name: 'Angular For Beginners',
    children: [
      {
        name: 'Introduction to Angular',
      },
      {
        name: 'Angular Component @Input()',
      },
      {
        name: 'Angular Component @Output()',
      },
    ],
  },
  {
    name: 'Angular Material In Depth',
    children: [
      {
        name: 'Introduction to Angular Material',
        children: [
          {
            name: 'Form Components',
          },
          {
            name: 'Navigation and Containers',
          },
        ],
      },
      {
        name: 'Advanced Angular Material',
        children: [
          {
            name: 'Custom Themes',
          },
          {
            name: 'Tree Components',
          },
        ],
      },
    ],
  },
];

@Component({
  selector: 'app-tree-demo',
  standalone: true,
  imports: [],
  templateUrl: './tree-demo.component.html',
  styleUrl: './tree-demo.component.scss',
})
export class TreeDemoComponent implements OnInit {
  ngOnInit() {}
}
