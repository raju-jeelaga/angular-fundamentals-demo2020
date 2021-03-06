import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightV3]'
})
export class HighlightV3Directive {

  
  constructor(private el: ElementRef) { }

  @Input('appHighlightV3') highlightColor : string;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || 'pink');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  @HostBinding('id') testid: string = 'some-checking-class';
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}


