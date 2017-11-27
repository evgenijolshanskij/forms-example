import { Component } from '@angular/core';
import { FormInput, ItemType } from '../components/form';

@Component({
  selector: 'form-view',
  template: `
    <div class="row text-center">
      <h2 class="col-md-12">Person Form</h2>
    </div>
    
    <app-form [onSubmit]="onSubmit"
              [btnName]="'Save'"
              [form]="form">
    </app-form>
  `,
  styleUrls: [
    '../app.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export default class PersonView {

  public form: FormInput[] = [
    {
      id: 'email',
      name: 'Email',
      value: '',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      inputType: ItemType.INPUT,
      required: true,
      pattern: () => { return '(.+)@(.+){2,}\\.(.+){2,}'; },
      patternMessage: 'Email should match to john@doe.com'
    },
    {
      id: 'name',
      name: 'Name',
      value: '',
      type: 'name',
      placeholder: 'Name',
      label: 'Name',
      inputType: ItemType.INPUT,
      required: true
    },
    {
      id: 'gender',
      name: 'Gender',
      value: '',
      label: 'Gender',
      inputType: ItemType.SELECTOR,
      options: ['Male', 'Female'],
      required: true
    },
    {
      id: 'active',
      name: 'Is Active',
      value: false,
      label: 'Is Active',
      inputType: ItemType.RADIO_BUTTON,
      required: false
    }
  ];

  constructor() {}

  public onSubmit(form: any) {
    event.preventDefault();
    console.log(form);
  }
}
