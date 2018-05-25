import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { FormFeedbackComponent } from './form-feedback/form-feedback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective, FormFeedbackComponent],
  exports: [HighlightDirective, FormFeedbackComponent]
})
export class SharedModule { }
