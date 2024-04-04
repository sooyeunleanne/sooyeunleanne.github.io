import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadowFollow]'
})
export class ShadowFollowDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const shadow = this.el.nativeElement;
    const x = event.pageX - shadow.offsetWidth / 2;
    const y = event.pageY - shadow.offsetHeight / 2;
    this.renderer.setStyle(shadow, 'transform', `translate(${x}px, ${y}px)`);
  }
}
