import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { SweetItemComponent } from './sweet-item/sweet-item.component';
import { SweetSelectorComponent } from './sweet-selector/sweet-selector.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SweetItemComponent,
    SweetSelectorComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SweetItemComponent,
    SweetSelectorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})

export class ComponentModule { }
