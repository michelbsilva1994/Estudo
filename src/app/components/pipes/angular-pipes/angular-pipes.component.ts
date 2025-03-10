import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  imports: [CommonModule],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {
  public date = signal(new Date());

  public json = signal([
    {name: 'Michel Pescadinha Silva'}
  ])

    public loadingData$: Observable<String[]> = of([
        'Clean',
        'Snatch',
        'HSPU',
        'Pull UP'
      ]).pipe(delay(1000));
}
