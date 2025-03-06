import { Component } from '@angular/core';
import { NewComponent } from '../../new/new.component';
import { CommonModule } from '@angular/common';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule ,NewComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
  public isTrue = false;

  public loadingData$: Observable<String[]> = of([
      'Clean',
      'Snatch',
      'HSPU',
      'Pull UP'
    ]).pipe(delay(3000));
}
