import { Component, OnInit } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, FormControl} from '@angular/forms';
import {NumSpacesPipe} from "../../pipes/num-spaces.pipe";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})

export class ReactiveFormsComponent implements OnInit {

  myForm!: FormGroup;
  mainFields!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private numSpacesPipe: NumSpacesPipe,
  ) {}


  ngOnInit(): void {
    this.initForm();

  }

  get fields(): FormArray {
    return this.myForm.get('fields') as FormArray;
  }

  initForm() {
    this.myForm = this.formBuilder.group({
      fields: this.formBuilder.array([]),
    });
  }

  newFields(): FormGroup {
    this.mainFields = this.formBuilder.group({
      name: [''],
      price: [''],
      monthQuantity: ['50'],
    });

    // this.mainFields.valueChanges.subscribe(form => {
    //     if (form.price) {
    //       this.mainFields.patchValue({
    //         price: this.numSpacesPipe.transform(form.price.split(' ').join(''))
    //       }, {emitEvent: false})
    //     }
    //   })

    return this.mainFields;
  }

  inputChange(event: any, control: any) {
    console.log('event', event.target.value, control);

    const valueNoSpaces = event.target.value.replace(/\s/g, '');
    const valueWithPipe = this.numSpacesPipe.transform(valueNoSpaces);

    console.log('valueWithPipe', valueWithPipe);

    event.target.value = valueWithPipe;

    control.setValue(valueNoSpaces, {
      emitEvent: false,
      emitModelToViewChange: false,
    });

    console.log(control);
  }



  // Добавить поле
  addFields(): void {
    const fields = this.newFields();
    this.fields.push(fields);
  }

  // Удалить поле
  removeFields(index: number): void {
    this.fields.removeAt(index);
  }

  // Отправить в консоль
  onSubmit() {
    console.log(this.myForm.value);
  }
}
