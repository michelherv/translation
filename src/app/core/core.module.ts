import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponent } from './core.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [CoreComponent],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
