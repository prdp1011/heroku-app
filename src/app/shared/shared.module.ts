import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './containers/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  imports: [
    CommonModule
    ],
  exports: [
    CommonModule,
    ModalComponent
  ]
})
export class SharedModule { }
