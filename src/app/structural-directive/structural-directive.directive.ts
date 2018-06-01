import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appStructuralDirective]'
})

export class StructuralDirectiveDirective {


  @Input() set appStructuralDirective(state: boolean) {
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
