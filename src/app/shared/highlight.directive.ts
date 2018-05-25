import {Directive, ElementRef, Input, OnInit, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  active = false;
  @HostBinding('style.border-left-color')
  @Input('appHighlight')
  color;
  @HostBinding('style.color')
  get activeColor() {
    return this.active ?  this.color : 'initial';
  }
  constructor(private elem: ElementRef) {
    console.log('hello!', this.elem);
  }

  ngOnInit(): void {
    console.log(this.color)
    this.elem.nativeElement.style.color = this.color
  }
  @HostListener('mouseenter')
  onEnter() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.active = false;
  }
}
