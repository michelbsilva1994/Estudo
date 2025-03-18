import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent implements OnInit{
  public name = 'Pescadinha';

    #apiService = inject(ApiService);

    // constructor(
    //   private _apiService: ApiService
    // ){}

    ngOnInit(): void {
      console.log(this.#apiService.name());

      this.#apiService.name$.subscribe({
        next: (next) => console.log(next),
        error: (error) => console.log(error),
        complete: () => console.log("Complete!"),
      });

      this.#apiService.name$.next('Pescadinha');

      this.#apiService.name.set('Didico');
    }
}
