import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '.clicker'
})
export class ClickDirectiveDirective {

  constructor(public elem:ElementRef) { }
  @HostListener('click') onclick(){
    console.log("element",this.elem.nativeElement);
  }
}
