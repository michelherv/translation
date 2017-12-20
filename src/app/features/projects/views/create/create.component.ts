import { Component, OnInit } from '@angular/core';
import { ProjectDto } from '@features/projects/dto/project.dto';
import { ProjectService } from '@features/projects/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  project: ProjectDto;
  pending: boolean;

  // @formatter:off
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  // @formatter:on

  ngOnInit() {
    this.project = new ProjectDto({
      id: 'project-' + Math.ceil(Math.random() * 100000),
      createdBy: 'miky-mike',
      lastModifiedBy: 'miky-mike'
    });
  }

  doSubmit(project: ProjectDto) {
    this.pending = true;
    this.projectService.create(project).subscribe(response => {
      this.pending = false;
      this.router.navigate([ '..', response.id, 'reading' ], {
        relativeTo: this.route
      });
    });
  }
}
