import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder,FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

function textValidator(): ValidatorFn{
  return (control: AbstractControl) => {
    const hasUppercase = /[A-Z]/.test(control.value)
    const hasNumber = /[0-9]/.test(control.value)

    if (hasUppercase && hasNumber) {
      return null;
    }

    return {textValidator: true}
  }
}

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

//constructor(public _fb: FormBuilder){}
#fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    name: ['',[Validators.required, textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['C#']
    }),
    myFavoriteFoods: this.#fb.array([['X-tudo']]),

  });

  public update(){
    this.profileForm.patchValue({
      name: 'Michel Silva',
      myStacks: {
        front: 'React',
        back: 'PHP'
      }
    });
  }

  public addMyFavoriteFoods(newFood: string){
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;

    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }

  public submit(){
    console.log(this.profileForm.valid);
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
