import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationsRoutingModule } from './translations-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    CommonModule,
    TranslationsRoutingModule
  ],
  declarations: [ ListComponent ]
})
export class TranslationsModule { }
