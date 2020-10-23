import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {stringInterpolationComponent} from '../String-Interpolation/string-interpolation.component'

@NgModule({
  declarations: [
    AppComponent,
    stringInterpolationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
