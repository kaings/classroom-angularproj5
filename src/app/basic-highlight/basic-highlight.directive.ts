import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive ({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  /*private elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }*/ /*or you can also shorten it as follows...*/

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
