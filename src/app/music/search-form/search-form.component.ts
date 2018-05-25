import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, ValidatorFn, AsyncValidatorFn, Validators, ValidationErrors} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import {filter, withLatestFrom} from 'rxjs/operators';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  censorValidator = (badword): ValidatorFn => control => {
    const doIHaveAnError = (<string>control.value).includes(badword);
    return doIHaveAnError
      ? {
        censor: {
          badword: badword
        }
      }
      : null;
  }
  asyncCensorValidator = (badword): AsyncValidatorFn => control => {
    const fakeValidator = this.censorValidator(badword);
    return Observable.create((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        observer.next(fakeValidator(control));
        observer.complete();
      }, 2000);
    });
  }
  queryForm =  this.queryForm = this.fb.group({
    query: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      this.censorValidator('batman')
    ], [
      this.asyncCensorValidator('superman')
    ])
  });
  value$ = this.queryForm.get('query').valueChanges;
  @Output()
  queryChange = this.queryForm.get('query').statusChanges.pipe(
    filter(status => status === 'VALID'),
    withLatestFrom(this.value$, (status, value) => value));
  @Input()
  set query(query) {
    this.queryForm.get('query').setValue(query);
  }
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
  }

}
