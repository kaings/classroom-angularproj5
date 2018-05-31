import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BasicHighlightRenderer2Directive } from './basic-highlight-renderer2/basic-highlight-renderer2.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BasicHighlightRenderer2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
