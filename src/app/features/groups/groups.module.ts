import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [ ListComponent ]
})
export class GroupsModule { }
