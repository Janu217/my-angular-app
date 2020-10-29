import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {stringInterpolationComponent} from '../String-Interpolation/string-interpolation.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { ProductsThumpnailComponent } from './products-thumpnail/products-thumpnail.component';
import { ProductsComponent } from './products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    stringInterpolationComponent,
    TwowayBindingComponent,
    PropertyBindingComponent,
    StructuraldirectivesComponent,
    ProductsThumpnailComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
