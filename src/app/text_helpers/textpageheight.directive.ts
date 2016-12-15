import {Directive, ElementRef, Renderer, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[textPageHeight]',
})
export class TextPageHeightDirective {
  @Input('textPageHeight') inset: string = "160"

  constructor(public el: ElementRef, public renderer: Renderer) {

  }

  ngOnInit() {


    this.renderer.setElementStyle(this.el.nativeElement, 'height', (window.innerHeight - parseInt(this.inset)).toString() + 'px' );

  }



}
