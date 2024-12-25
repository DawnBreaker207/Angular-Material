import { Component, OnInit } from '@angular/core';
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodeOutlet,
  MatTreeNodePadding,
  MatTreeNodeToggle,
} from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

interface CourseNode {
  name: string;
  children?: CourseNode[];
}

interface CourseFlatNode {
  name: string;
  expandable: boolean;
  level: number;
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
    MatTreeNodePadding,
  ],
  templateUrl: './tree-demo.component.html',
  styleUrl: './tree-demo.component.scss',
})
export class TreeDemoComponent implements OnInit {
  protected readonly TREE_DATA = TREE_DATA;
  // NESTED TREE
  nestedDataSource = new MatTreeNestedDataSource<CourseNode>();
  nestedTreeControl = new NestedTreeControl<CourseNode>(
    (node) => node.children,
  );

  // FLAT TREE
  flatTreeControl = new FlatTreeControl<CourseFlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    (node: CourseNode, level: number): CourseFlatNode => {
      return {
        name: node.name,
        expandable: !!node.children?.length,
        level,
      };
    },
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  flatDataSource = new MatTreeFlatDataSource(
    this.flatTreeControl,
    this.treeFlattener,
  );

  ngOnInit() {
    this.nestedDataSource.data = TREE_DATA;
    this.flatDataSource.data = TREE_DATA;
  }

  hasNestedChild(index: number, node: CourseNode) {
    return !!node.children?.length;
  }

  hasFlatChild(index: number, node: CourseFlatNode) {
    return node.expandable;
  }
}
