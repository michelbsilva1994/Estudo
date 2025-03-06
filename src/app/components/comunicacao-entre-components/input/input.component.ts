import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string){
  return value.toLocaleUpperCase();
}

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal("Sem nome");

  @Input({
     //alias: "abacaxi",
     required: true,
     transform: toUpperCase
    }) set inputName(value: string){
      this.name.set(value);
    }
}
