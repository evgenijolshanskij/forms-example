import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <div class="container">
      <div class="row text-center">
        <h1 class="col-md-12">Forms Example!</h1>
      </div>

      <div class="row d-flex justify-content-center">
        <form class="col-md-6" name="registerForm" #registerForm="ngForm" (submit)="onSubmit(registerForm.form.value)">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" class="form-control" name="firstName" [(ngModel)]="form.firstName">
          </div>
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" class="form-control" name="lastName" [(ngModel)]="form.lastName">
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" class="form-control" name="password" [(ngModel)]="form.password">
          </div>
          <div class="form-group">
            <label for="passwordConfirmation">Password Confirmation:</label>
            <input type="password" id="passwordConfirmation" class="form-control" name="passwordConfirmation" [(ngModel)]="form.passwordConfirmation">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  `,
  styleUrls: [
    '../app.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export default class FromComponent {

  public form: any = {};

  constructor() {}

  public onSubmit(form: any) {
    event.preventDefault();
    console.log(form);
  }
}
