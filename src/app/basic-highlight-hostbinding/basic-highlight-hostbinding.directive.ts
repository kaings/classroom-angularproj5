import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBasicHighlightHostbinding]'
})

export class BasicHighlightHostbindingDirective {
  @HostBinding('style.backgroundColor') colorOfBack: string = 'blue';
  @HostBinding('class.on-mouse-over') isOnMouseOver: boolean = false;

  constructor() {
  }

  @HostListener('mouseenter') onMouseOver() {
    this.colorOfBack = 'orange';
    this.isOnMouseOver = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorOfBack = 'blue';
    this.isOnMouseOver = false;
  }
}
