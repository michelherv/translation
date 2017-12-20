import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from '@core/core-routing.module';
import { CoreComponent } from '@core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  bootstrap: [CoreComponent],
  declarations: [CoreComponent],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    BrowserAnimationsModule
  ],
})
export class CoreModule {
}
