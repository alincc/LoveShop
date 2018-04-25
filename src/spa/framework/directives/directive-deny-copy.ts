import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[deny-copy]',
    host: {
        '(cut)': 'preventDefault($event)',
        '(paste)': 'preventDefault($event)',
        '(copy)': 'preventDefault($event)',
    }
})

export class DenyCopyDirective {
    public preventDefault(e: any): void {
        e.preventDefault();
    }
}