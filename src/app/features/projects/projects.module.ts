import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProjectsRoutingModule } from '@features/projects/projects-routing.module';
import { ProjectService } from '@features/projects/services/project.service';
import { ListComponent } from '@features/projects/views/list/list.component';
import { ListResolver } from '@features/projects/views/list/list.resolver';
import { ReadResolver } from '@features/projects/views/read/read.resolver';
import { RemoveResolver } from '@features/projects/views/remove/remove.resolver';
import { UpdateResolver } from '@features/projects/views/update/update.resolver';
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
    MatIconModule,
    MatInputModule,
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
    ReadResolver,
    UpdateResolver,
    RemoveResolver
  ]
})
export class ProjectsModule {
}
