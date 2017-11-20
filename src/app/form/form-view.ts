import { Component } from '@angular/core';

@Component({
  selector: 'form-view',
  template: `
    <app-form></app-form>
  `
})
export default class FromView {

  public form: any = {};

  constructor() {}

  public onSubmit(form: any) {
    event.preventDefault();
    console.log(form);
  }
}
