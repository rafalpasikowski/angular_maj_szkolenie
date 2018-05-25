import {Component, Input, OnInit, Output} from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent implements OnInit {
  @Input()
  field: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
