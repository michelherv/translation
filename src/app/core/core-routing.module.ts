import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    loadChildren: () => import('../features/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'projects/:projectId/groups',
    loadChildren: () => import('../features/groups/groups.module').then(m => m.GroupsModule)
  },
  {
    path: 'projects/:projectId/groups/:groupId/translations',
    loadChildren: () => import('../features/translations/translations.module').then(m => m.TranslationsModule)
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
