import {Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive ({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.show') isToggled = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onToggleDropdown(){
    this.isToggled = !this.isToggled;
  }
}
