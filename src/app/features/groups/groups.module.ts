import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from '@features/groups/groups-routing.module';
import { ListComponent } from '@features/groups/list/list.component';


@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [ ListComponent ]
})
export class GroupsModule { }
