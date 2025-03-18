import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '@components/new/new.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit{

  // constructor(
  //   private _apiService: ApiService
  // ){}

  #apiService = inject(ApiService);

  public getListTask = this.#apiService.getListTask;

  ngOnInit(): void {
    // this.getTask$.subscribe({
    //   next: (next) => console.log(next),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Complete!')
    // })
    this.#apiService.httpListTask$().subscribe();
  }

}
