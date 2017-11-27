import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import FromComponent from '../components/form';
import RegistrationView from './registration-view';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import PersonView from './person-view';

@NgModule({
  declarations: [
    FromComponent,
    RegistrationView,
    PersonView
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'register',
        component: RegistrationView
      },
      {
        path: 'person',
        component: PersonView
      }
    ])
  ],
  exports: [
    FromComponent,
    RegistrationView
  ]
})
export class FormModule {}
