import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDto } from '@features/projects/dto/project.dto';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  project: ProjectDto;


  // @formatter:off
  constructor(
    public route: ActivatedRoute
  ) { }
  // @formatter:on


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.project = data['project'];
    });
  }
}
