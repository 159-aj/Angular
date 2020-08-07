import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';

import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
// import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  
  { path: 'welcome', component: WelcomeComponent },
  // {path:'**',redirectTo:'welcome'}
  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', redirectTo: 'welcome', pathMatch: 'full' },  
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id',
  canActivate: [ProductDetailGuard],
   component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
