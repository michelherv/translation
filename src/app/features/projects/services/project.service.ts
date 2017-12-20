import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDto } from '@features/projects/dto/project.dto';
import { AbstractService } from '@shared/services/abstract.service';
import { environment } from '@env/environment';


@Injectable()
export class ProjectService extends AbstractService<ProjectDto> {
  constructor(http: HttpClient) {
    super(http, ProjectDto, `${environment.api}/projects`);
  }
}
