import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'products-thumpnail',
  templateUrl: './products-thumpnail.component.html',
  styles: [
  ]
})
export class ProductsThumpnailComponent {

  constructor() { }

  @Input() products;


}
