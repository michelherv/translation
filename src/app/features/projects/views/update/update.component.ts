import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDto } from '@features/projects/dto/project.dto';
import { ProjectService } from '@features/projects/services/project.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  project: ProjectDto;
  pending: boolean;


  // @formatter:off
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  // @formatter:on


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.project = data['project'];
    });
  }


  doSubmit(project: ProjectDto) {
    this.pending = true;
    this.projectService.update(project).subscribe(response => {
      this.pending = false;
      this.location.back();
    });
  }
}
