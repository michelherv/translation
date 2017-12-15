import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationsRoutingModule } from '@features/translations/translations-routing.module';
import { ListComponent } from '@features/translations/list/list.component';


@NgModule({
  imports: [
    CommonModule,
    TranslationsRoutingModule
  ],
  declarations: [ ListComponent ]
})
export class TranslationsModule { }
