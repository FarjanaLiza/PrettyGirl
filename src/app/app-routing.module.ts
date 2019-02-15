import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes =[
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent, data: {animation: 'HomePage'}},
  { path: 'products', component: AllProductsComponent,data: {animation: 'AboutPage'}},
  { path: '**', component: PageNotFoundComponent }
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ 
    RouterModule,
   ]
})
export class AppRoutingModule { }

export const routingComponents = [HomepageComponent];


/*const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component:HomeComponent},
    { path: 'flaver', component:FlaverComponent},
    { path: 'item' , component:ItemComponent},
    { path: '**', component: PagenotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,FlaverComponent,PagenotFoundComponent,ItemComponent]; */
