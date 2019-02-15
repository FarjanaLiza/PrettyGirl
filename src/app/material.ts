import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule],
})
export class MyOwnCustomMaterialModule { }