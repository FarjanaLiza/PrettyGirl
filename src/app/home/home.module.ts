import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from '../material';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomeModule { }
