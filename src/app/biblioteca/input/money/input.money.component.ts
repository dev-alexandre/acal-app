import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-money',
  templateUrl: './input.money.component.html',
})

export class InputMoneyComponent implements OnInit {

  @Input()
  public value: string ;

  @Input()
  public submetido: Boolean;

  @Input()
  public valido: boolean;

  @Input()
  public disabled: boolean;

  @Output()
  public setValue = new EventEmitter();


  ngOnInit(): void {
    console.log(this.value);

    if (this.value) {
      this.value = this.value.toString().replace('\.', ',');
    }
    console.log(this.value);
  }

  public ngModelChange(value: string): void {
    this.setValue.emit(this.value);
    console.log(this.value);
  }


}
