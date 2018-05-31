import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlightHostbinding]'
})

export class BasicHighlightHostbindingDirective implements OnInit {
  @HostBinding('style.backgroundColor') colorOfBack: string;
  @Input() initialColor: string;
  @Input() highlightColor: string;
  // @Input('appBasicHighlightHostbinding') highlightColor: string;  // use alias similar to selector if this is the main/ the only property


  constructor() {
  }

  ngOnInit() {
    this.colorOfBack = this.initialColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    this.colorOfBack = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.colorOfBack = this.initialColor;
  }
}
