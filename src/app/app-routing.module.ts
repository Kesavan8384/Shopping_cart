import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './Authentication/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/signin', pathMatch: 'full' },
  { path: 'app/signin', component: SigninComponent },
  { path: 'app/signup', component: SignupComponent },
  {
    path: 'app', component: HomeComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'products', component: ProductlistComponent },
      { path: 'productinfo/:id', component: ProductinfoComponent },
      { path: 'cart', component: CartComponent }

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
