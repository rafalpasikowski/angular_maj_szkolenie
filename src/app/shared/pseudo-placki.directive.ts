import {Directive, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[appPseudoPlacki]'
})
export class PseudoPlackiDirective {
  @Input()
  set appPseudoPlacki(hide) {
    if (hide) {
      this.vcr.clear();
    } else {
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: 'placki',
        index: 0,
        time: (new Date().toLocaleTimeString())
      }, 0);
    }
  }

  constructor(private vcr: ViewContainerRef,
              private tpl: TemplateRef<any>) {
    console.log('hello form placki');
  }

}
