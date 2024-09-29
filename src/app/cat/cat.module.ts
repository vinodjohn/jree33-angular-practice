import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { CatFormComponent } from './cat-form/cat-form.component';



@NgModule({
  declarations: [
    CatComponent,
    CatFormComponent
  ],
  exports: [
    CatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatModule { }
