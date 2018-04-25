import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';

let id = 1;

@Component({
  selector: 'ptt-pin',
  templateUrl: './ptt-pin.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PttPinComponent {
  @Input() type = 'tel';
  @Input()
  get value() {
    return this.pinValue;
  }
  set value(v: string) {
    this.pinValue = v.toString().substr(0, 5);
    this.calcPIN();
  }
  @Output() pinChange = new EventEmitter<string>();
  @Output() focusIntoInput = new EventEmitter<string>();
  @Output() focusOutInput = new EventEmitter<string>();
  compId = 'ptt-pin-'+ id++;
  private pinValue = '';
  public pin1: string;
  public pin2: string;
  public pin3: string;
  public pin4: string;
  public pin5: string;

  @ViewChild('inp') input: ElementRef;

  private calcPIN() {
    this.pin1 = this.pinValue.substr(0, 1);
    this.pin2 = this.pinValue.substr(1, 1);
    this.pin3 = this.pinValue.substr(2, 1);
    this.pin4 = this.pinValue.substr(3, 1);
    this.pin5 = this.pinValue.substr(4, 1);
  }

  setFocus() {
    if (this.input) {
      this.input.nativeElement.focus();
    }
  }

  updatePIN(event) {
    event.preventDefault();
    this.value = event.target.value;
    this.pinChange.emit(this.value);
  }

  focusInput(event) {
    this.focusIntoInput.emit(this.value);
  }

  focusoutInput(event) {
    this.focusOutInput.emit(this.value);
  }


}