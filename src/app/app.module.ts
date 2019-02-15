import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './material';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsModule } from "./products/products.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    ProductsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
