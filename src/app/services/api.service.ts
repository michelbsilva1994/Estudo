import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';

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
  get getListTask(){
    return this.#setListTask.asReadonly();
  }

  #setTaskListError = signal<ITask[] | null>(null);
  get getTaskListError(){
    return this.#setTaskListError.asReadonly();
  }

  public httpListTask$(): Observable<ITask[]>{
    this.#setListTask.set(null);
    this.#setTaskListError.set(null);

    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res)),
      catchError((error)=>{
        this.#setTaskListError.set(error.error.message);
        return throwError(()=> error);
      })
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId(){
    return this.#setTaskId.asReadonly();
  }
  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError(){
    return this.#setTaskIdError.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask>{
    this.#setTaskId.set(null);
    this.#setTaskIdError.set(null);
    return this.#http.get<ITask>(`${this.#url()}${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res)),
      catchError ((error: HttpErrorResponse)=>{
        this.#setTaskIdError.set(error.error.message);
        return throwError(()=>error);
      })
    );
  }

  #setTaskCreateError = signal<ITask | null>(null);
  get getTaskCreateError(){
    return this.#setTaskCreateError.asReadonly();
  }
  public httpTaskCreate$(title: string): Observable<ITask>{
    return this.#http.post<ITask>(this.#url(),{title}).pipe(
      shareReplay(),
      catchError((error) => {
        this.#setTaskCreateError.set(error.error.message);
        return throwError(() => error);
      })
    );
  }

  #setTaskUpdateError = signal<ITask | null>(null);
  get getTaskUpdateError(){
    return this.#setTaskUpdateError.asReadonly();
  }
  public httpTaskUpdate$(id: string, title: string): Observable<ITask>{
    this.#setTaskUpdateError.set(null);
    return this.#http.patch<ITask>(`${this.#url()}${id}`, { title }).pipe(
      shareReplay(),
      catchError((error: HttpErrorResponse) => {
        this.#setTaskUpdateError.set(error.error.message);
        return throwError(()=>error);
      })
    );
  }

  #setTaskDeleteError = signal<ITask | null>(null);
  get getTaskDeleteError(){
    this.#setTaskDeleteError.set(null);
    return this.#setTaskDeleteError.asReadonly();
  }
  public httpTaskDelete$(id: string): Observable<void>{
    this.#setTaskDeleteError.set(null);
    return this.#http.delete<void>(`${this.#url()}${id}`, {}).pipe(shareReplay());
  }

  constructor(){ }
}
