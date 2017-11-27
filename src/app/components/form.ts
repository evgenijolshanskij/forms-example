import { Component, Input } from '@angular/core';

export enum ItemType {
  INPUT = 0,
  SELECTOR = 1,
  RADIO_BUTTON = 2
}

export interface FormInput {
  id: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  inputType: ItemType;
  options?: any[];
  minLength?: number;
  required?: boolean;
  pattern?: any;
  patternMessage?: string;
}

@Component({
  selector: 'app-form',
  template: `
    <div class="row d-flex justify-content-center">
      <form class="col-md-6" name="thisForm" #thisForm="ngForm" (submit)="onSubmit(thisForm.form.value)">
        <div [ngClass]="{'form-group': fi.inputType !== 2, 'form-check': fi.inputType === 2}" *ngFor="let fi of form">
          <label for="{{fi.id}}">{{fi.name}}</label>
          <input type="{{fi.type}}"
                 id="{{fi.id}}"
                 class="form-control"
                 name="{{fi.id}}"
                 #name="ngModel"
                 placeholder="{{fi.placeholder}}"
                 [(ngModel)]="fi.value"
                 pattern="{{pattern(fi.pattern)}}"
                 required="{{fi.required}}">

          <div *ngIf="name.invalid && (name.dirty || name.touched)" class="text-danger">
            <small [hidden]="!name.errors.required">
              {{fi.name}} is required
            </small>
            <small *ngIf="name.errors.pattern">
              {{fi.patternMessage}}
            </small>
          </div>

        </div>
        
        <button type="submit" class="btn btn-primary" [disabled]="thisForm.invalid">{{btnName}}</button>
      </form>
    </div>
  `,
  styleUrls: [
    '../app.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  ]
})
export default class FromComponent {

  @Input() public btnName: string;
  @Input() public onSubmit: any;
  @Input() public loading: boolean;
  @Input() public submitting: boolean;
  @Input() public form: FormInput[];

  constructor() {}

  public pattern(p?: () => string) {
    return p ? p() : null;
  }

}
