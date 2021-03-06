import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBasicHighlightRenderer2]'
})
export class BasicHighlightRenderer2Directive implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'aqua');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }
}
