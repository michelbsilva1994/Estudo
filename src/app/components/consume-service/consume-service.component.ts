import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponent } from '@components/new/new.component';
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

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
  public getTaskId = this.#apiService.getTaskId;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskCreateError = this.#apiService.getTaskCreateError;
  public getTaskUpdateError = this.#apiService.getTaskUpdateError;
  public getTaskDeleteError = this.#apiService.getTaskDeleteError;
  public getTaskListError = this.#apiService.getTaskListError;

  ngOnInit(): void {
    // this.getTask$.subscribe({
    //   next: (next) => console.log(next),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('Complete!')
    // })
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$('8ELgvf07f0SPB9QEoFYa').subscribe();
  }

  public httpTaskCreate(title: string) {
    return this.#apiService.httpTaskCreate$(title)
    .pipe(concatMap(()=> this.#apiService.httpListTask$()))
    .subscribe();
  }

  public httpTaskUpdate(id: string, title: string) {
    return this.#apiService.httpTaskUpdate$(id, title)
    .pipe(concatMap(()=> this.#apiService.httpListTask$()))
    .subscribe();
  }

  public httpTaskDelete(id: string){
    return this.#apiService.httpTaskDelete$(id)
    .pipe(concatMap(()=> this.#apiService.httpListTask$()))
    .subscribe();
  }
}
