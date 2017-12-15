import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ProjectsRoutingModule } from '@features/projects/projects-routing.module';
import { ListComponent } from '@features/projects/list/list.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ProjectsRoutingModule,
  ],
  declarations: [ ListComponent ]
})
export class ProjectsModule { }
