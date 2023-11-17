import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  @HostBinding('style.backgroundColor')
  bgColor = "transparent"

  @HostListener('mouseenter')
  onMouseEnter(){
    this.bgColor = "yellow";
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.bgColor = "white";
  }
}
