import { Component, OnInit } from '@angular/core';
import { ProjectDto } from '@features/projects/dto/project.dto';


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projects: ProjectDto[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      new ProjectDto({
        id: 'id-01',
        name: 'Project 01',
        createdBy: 'miky-mike',
        lastModifiedBy: 'miky-mike'
      }),
      new ProjectDto({
        id: 'id-02',
        name: 'Project 02',
        createdBy: 'miky-mike',
        lastModifiedBy: 'miky-mike'
      }),
      new ProjectDto({
        id: 'id-03',
        name: 'Project 03',
        createdBy: 'miky-mike',
        lastModifiedBy: 'miky-mike'
      }),
      new ProjectDto({
        id: 'id-04',
        name: 'Project 04',
        createdBy: 'miky-mike',
        lastModifiedBy: 'miky-mike'
      }),
      new ProjectDto({
        id: 'id-05',
        name: 'Project 05',
        createdBy: 'miky-mike',
        lastModifiedBy: 'miky-mike'
      })
    ];
  }
}
