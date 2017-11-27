import { Component } from '@angular/core';
import { FormInput, ItemType } from '../components/form';

@Component({
  selector: 'form-view',
  template: `
    <div class="row text-center">
      <h2 class="col-md-12">Registration Form</h2>
    </div>
    
    <app-form [onSubmit]="onSubmit"
              [btnName]="'Register'"
              [form]="form">
    </app-form>
  `,
  styleUrls: [
    '../app.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export default class RegistrationView {

  public form: FormInput[] = [
    {
      id: 'email',
      name: 'Email',
      value: '',
      type: 'email',
      placeholder: 'Email',
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
      inputType: ItemType.INPUT,
      required: true
    },
    {
      id: 'password',
      name: 'Password',
      value: '',
      type: 'password',
      placeholder: 'Password',
      inputType: ItemType.INPUT,
      required: true
    },
    {
      id: 'passwordConfirmation',
      name: 'Password Confirmation',
      value: '',
      type: 'password',
      placeholder: 'Password Confirmation',
      inputType: ItemType.INPUT,
      required: true,
      pattern: () => { return this.form.find((fi: any) => fi.id === 'password').value; },
      patternMessage: 'Should match to password'
    }
  ];

  constructor() {}

  public onSubmit(form: any) {
    event.preventDefault();
    console.log(form);
  }
}
