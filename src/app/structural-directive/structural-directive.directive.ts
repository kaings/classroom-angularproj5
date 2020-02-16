import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})

export class StructuralDirectiveDirective {
  @Input('appStructuralDirective') set structuralDirective(state: boolean) {  // utilising alias also works!
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
