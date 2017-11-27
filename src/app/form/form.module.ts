import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import FromComponent from '../components/form';
import RegistrationView from './registration-view';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FromComponent,
    RegistrationView
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'form',
        component: RegistrationView
      }
    ])
  ],
  exports: [
    FromComponent,
    RegistrationView
  ]
})
export class FormModule {}
