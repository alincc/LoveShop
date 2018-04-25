import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[OnlyInteger]'
})
export class OnlyInteger {

    constructor(private el: ElementRef) { }

    @HostListener('keypress', ['$event']) 
    @HostListener('keyup', ['$event']) 
    @HostListener('input', ['$event']) 
    @HostListener('change', ['$event']) 
    @HostListener('focus', ['$event']) 
    @HostListener('focus', ['$event']) 
    @HostListener('focusout', ['$event'])     
    private eventHandler(e) {
        if(e && e.triggerByOnlyInteger){
            return;
        }
        const input = <any>(event.target);
        this.restrict(input);  
    }

    private restrict( input ){
      if(input && input.value) {
        let value = parseInt(input.value, 10);
        if(isNaN(value)){
            value = 0;
        }
        input.value = value;
        this.fireEvent(input, 'input');
      }
    }


    private fireEvent(element,event){
        if ((<any>document).createEventObject){
            // dispatch for IE
            let evt = (<any>document).createEventObject();
            evt['triggerByOnlyInteger'] = true;
            return element.fireEvent('on'+event,evt)
        } else {
            // dispatch for firefox + others
            let evt = document.createEvent("HTMLEvents");
            evt['triggerByOnlyInteger'] = true;
            evt.initEvent(event, true, true ); // event type,bubbling,cancelable
            return !element.dispatchEvent(evt);
        }
    }
}