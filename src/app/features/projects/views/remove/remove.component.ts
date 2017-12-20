import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDto } from '@features/projects/dto/project.dto';
import { ProjectService } from '@features/projects/services/project.service';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})
export class RemoveComponent implements OnInit {
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
    this.route.data.subscribe(data => {
      this.project = data['project'];
    });
  }


  doSubmit(project: ProjectDto) {
    this.pending = true;
    this.projectService.remove(project.id).subscribe(response => {
      this.pending = false;
      this.router.navigate(['../..'], {
        relativeTo: this.route
      });
    });
  }
}
