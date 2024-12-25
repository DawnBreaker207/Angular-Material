import { Component, OnInit } from '@angular/core';
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodeToggle,
} from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

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
  imports: [
    MatTree,
    MatTreeNode,
    MatTreeNodeToggle,
    MatTreeNodeDef,
    MatNestedTreeNode,
    MatIconButton,
    MatIcon,
    MatTreeNodeOutlet,
  ],
  templateUrl: './tree-demo.component.html',
  styleUrl: './tree-demo.component.scss',
})
export class TreeDemoComponent implements OnInit {
  protected readonly TREE_DATA = TREE_DATA;
  nestedDataSource = new MatTreeNestedDataSource<CourseNode>();

  nestedTreeControl = new NestedTreeControl<CourseNode>(
    (node) => node.children,
  );

  ngOnInit() {
    this.nestedDataSource.data = TREE_DATA;
  }

  hasNestedChild(index: number, node: CourseNode) {
    return node?.children.length > 0;
  }
}
