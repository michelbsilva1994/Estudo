import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public isTrue = true;

  public itens: Array<{name: string}> = [{name: 'Nabuco'}];

  public addNewName(value: string){
    return this.itens.push({name: value});
  }

  public loadingData$: Observable<String[]> = of([
    'Clean',
    'Snatch',
    'HSPU',
    'Pull UP'
  ]).pipe(delay(3000));

  public trackByFn(index:number){
    return index;
  }

  public switchCondicition = "B";
}
