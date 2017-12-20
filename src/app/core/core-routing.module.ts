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
    loadChildren: '../features/projects/projects.module#ProjectsModule'
  },
  {
    path: 'projects/:projectId/groups',
    loadChildren: '../features/groups/groups.module#GroupsModule'
  },
  {
    path: 'projects/:projectId/groups/:groupId/translations',
    loadChildren: '../features/translations/translations.module#TranslationsModule'
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule { }
