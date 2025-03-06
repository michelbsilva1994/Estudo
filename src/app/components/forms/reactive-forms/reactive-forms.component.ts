import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJS')
    }),
    myFavoriteFoods: new FormArray([
      new FormControl('X-tudo'),
    ])
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
}
