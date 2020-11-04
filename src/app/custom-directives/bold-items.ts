import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:"[bold-items]"
})

export class boldfontitems implements OnInit{
    constructor(public el:ElementRef) {
        console.log(el);   
       }

       ngOnInit():void{
           this.el.nativeElement.style["background-color"]="yellow";
       }
}