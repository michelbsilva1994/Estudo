import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../../new/new.component';

@Component({
  selector: 'app-template-variable',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variable.component.html',
  styleUrl: './template-variable.component.scss'
})
export class TemplateVariableComponent implements AfterViewInit {

  // @ViewChild('name') public nameInput!: ElementRef;
  // @ViewChild('h2') public h2Value!: ElementRef;

  // @ViewChild(NewComponent) public childComponent!: NewComponent;

  ngAfterViewInit(): void {
    // console.log(this.nameInput.nativeElement.value);
    // console.log(this.h2Value.nativeElement);
    // console.log(this.childComponent.name);
  }
}
