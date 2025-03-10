import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{comida: string, preco: string}>>([
    {comida: 'Salada',preco: 'R$ 10'},
    {comida: 'Coxinha',preco: 'R$ 15'},
    {comida: 'X-Bacon',preco: 'R$ 20'}
  ]);

  public submitForm(form: NgForm){
    console.log(form.valid);

    if(form.valid){
      console.log(form.value);
    }
  }
}
