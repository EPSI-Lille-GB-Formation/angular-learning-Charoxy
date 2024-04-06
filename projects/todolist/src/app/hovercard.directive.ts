import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[Hovercard]',
  standalone: true
})
export class HovercardDirective {

  constructor(private elementRef: ElementRef) { }

  @HostBinding('style.borderStyle')
  borderStyle = "solid"

  @HostBinding('style.borderColor')
  borderColor = "transparent"

  @HostBinding('style.borderWidth')
  borderWith = "2px"


  @HostListener("mouseenter")
  onMouseEnter(){
    this.borderColor = "blue"
  }

  @HostListener("mouseleave")
  onMouseLeave(){
    this.borderColor = "transparent"
  }

}
