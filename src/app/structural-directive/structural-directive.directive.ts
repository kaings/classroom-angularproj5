import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})

export class StructuralDirectiveDirective {


  @Input() set appStructuralDirective(state: boolean) {   //  also work this way, just need to set the alias:  @Input('appStructuralDirective') set appStructural(state: boolean) {...}
    if (!state) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {}
}
