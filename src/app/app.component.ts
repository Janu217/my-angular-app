import { Component } from '@angular/core';

@Component({
  // selector: 'app-root-test',
  //------------Selector with attribute
  // selector: '[app-root]',
  //------------Selector with class name
  selector: '.app-root',
  //Inline Template
  // template:"<div>hi</div>",
  //---------inline template multiple line
  template:`<h1> Inline template with multiple lines</h1>
            <h2> multiple lines </h2>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
