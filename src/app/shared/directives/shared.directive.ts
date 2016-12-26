
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
@Directive({ selector: '[sharedDirective]' })
export class SharedDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}

