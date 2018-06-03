import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BasicHighlightRenderer2Directive } from './basic-highlight-renderer2/basic-highlight-renderer2.directive';
import { BasicHighlightHostbindingDirective } from './basic-highlight-hostbinding/basic-highlight-hostbinding.directive';

import { StructuralDirectiveDirective } from './structural-directive/structural-directive.directive';
import { DropdownDirective } from './dropdown/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BasicHighlightRenderer2Directive,
    BasicHighlightHostbindingDirective,
    StructuralDirectiveDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
