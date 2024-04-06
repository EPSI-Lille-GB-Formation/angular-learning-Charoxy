import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  @Input("bg-color")
  bgHighlightColor = 'yellow'

  @Input("bg-default")
  defaultBackground = "transparent"

  @HostBinding('style.backgroundColor')
  background = this.defaultBackground

  @HostListener('mouseenter')
  onMouseEnter(){
    this.background = this.bgHighlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.background = this.defaultBackground;
  }

  ngOnInit(){
    this.background = this.defaultBackground;
  }
}
