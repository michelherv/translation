import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProjectDto } from '@features/projects/dto/project.dto';
import { ProjectService } from '@features/projects/services/project.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RemoveResolver implements Resolve<ProjectDto> {

  // @formatter:off
  constructor(
    private projectService: ProjectService
  ) { }
  // @formatter:on


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectDto> {
    return this.projectService.get(route.params['projectId']);
  }
}
