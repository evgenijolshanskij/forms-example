import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import FromComponent from './form';
import FromView from './form-view';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FromComponent,
    FromView
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: 'form',
        component: FromView
      }
    ])
  ],
  exports: [
    FromComponent,
    FromView
  ]
})
export class FormModule {}
