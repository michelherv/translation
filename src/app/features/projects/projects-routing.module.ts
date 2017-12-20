import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '@features/projects/views/create/create.component';
import { ListComponent } from '@features/projects/views/list/list.component';
import { ListResolver } from '@features/projects/views/list/list.resolver';
import { ReadComponent } from '@features/projects/views/read/read.component';
import { ReadResolver } from '@features/projects/views/read/read.resolver';
import { RemoveResolver } from '@features/projects/views/remove/remove.resolver';
import { UpdateComponent } from '@features/projects/views/update/update.component';
import { UpdateResolver } from '@features/projects/views/update/update.resolver';
import { RemoveComponent } from './views/remove/remove.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: { projects: ListResolver }
  },
  {
    path: 'creating',
    component: CreateComponent
  },
  {
    path: ':projectId/reading',
    component: ReadComponent,
    resolve: { project: ReadResolver }
  },
  {
    path: ':projectId/updating',
    component: UpdateComponent,
    resolve: { project: UpdateResolver }
  },
  {
    path: ':projectId/removing',
    component: RemoveComponent,
    resolve: { project: RemoveResolver }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
}
