import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { ProjectsRoutingModule } from '@features/projects/projects-routing.module';
import { ProjectService } from '@features/projects/services/project.service';
import { ListComponent } from '@features/projects/views/list/list.component';
import { ListResolver } from '@features/projects/views/list/list.resolver';
import { ReadResolver } from '@features/projects/views/read/read.resolver';
import { CreateComponent } from './views/create/create.component';
import { ReadComponent } from './views/read/read.component';
import { RemoveComponent } from './views/remove/remove.component';
import { UpdateComponent } from './views/update/update.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ProjectsRoutingModule,
  ],
  declarations: [
    ListComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    RemoveComponent,
    RemoveComponent
  ],
  providers: [
    ProjectService,
    ListResolver,
    ReadResolver
  ]
})
export class ProjectsModule {
}
