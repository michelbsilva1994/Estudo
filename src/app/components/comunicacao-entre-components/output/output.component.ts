import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
 @Output() public outputName = new EventEmitter();

 public sendOutputName(){
  return this.outputName.emit("Michel Barros da Silva");
 }
}
