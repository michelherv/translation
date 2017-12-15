import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponent } from '@core/core.component';
import { CoreRoutingModule } from '@core/core-routing.module';


@NgModule({
  bootstrap: [ CoreComponent ],
  declarations: [ CoreComponent ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule
  ],
})
export class CoreModule { }
