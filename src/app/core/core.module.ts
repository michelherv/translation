import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from '@core/core-routing.module';
import { CoreComponent } from '@core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  bootstrap: [CoreComponent],
  declarations: [CoreComponent],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
})
export class CoreModule {
}
