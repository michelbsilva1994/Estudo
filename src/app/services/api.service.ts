import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask{id:string, title: string};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //Novo
  public name = signal('Michel Barros');
  //Antigo
  public name$= new BehaviorSubject('Michel Barros da Silva $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  #setListTask = signal<ITask[] | null>(null);
  public getListTask = this.#setListTask.asReadonly();

  public httpListTask$(): Observable<Array<ITask>>{
    return this.#http.get<ITask[]>(this.#url()).pipe(shareReplay(), tap((res) => this.#setListTask.set(res)));
  }

  constructor(){ }
}
