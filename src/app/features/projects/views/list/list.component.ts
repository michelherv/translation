import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDto } from '@features/projects/dto/project.dto';


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  projects: ProjectDto[];

  // @formatter:off
  constructor(
    public route: ActivatedRoute
  ) { }
  // @formatter:on


  ngOnInit() {
    this.route.data.subscribe(data => this.projects = data['projects']);
  }
}
