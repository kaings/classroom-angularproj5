import {Directive, ElementRef, HostListener, OnInit, Renderer2, Self, ViewContainerRef} from '@angular/core';
import {FormControl, NgControl} from '@angular/forms';

@Directive({
  selector: '[appBasicHighlightRenderer2]'
})
export class BasicHighlightRenderer2Directive implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef, @Self() private control: NgControl) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');

    console.log('ngControl..... ', this.control);
  }

  @HostListener('mouseenter') onMouseOver() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'aqua');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }
}
