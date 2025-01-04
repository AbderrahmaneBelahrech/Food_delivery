import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard
import { ResteauProduitsComponent } from './pages/resteau-produits/resteau-produits.component';
import { CategoryRestaurantsComponent } from './pages/category-restaurants/category-restaurants.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterDeliveryComponent } from './pages/register-delivery/register-delivery.component';
import { DashboardDeliveryComponent } from './dashboard-delivery/dashboard-delivery.component';
import { SuccessComponent } from './pages/success/success.component';
import { ErrorComponent } from './pages/error/error.component';
import { TrakingOrderComponent } from './pages/traking-order/traking-order.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',  // Redirect to login by default
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },  
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    
  }, { 
    path: '',
    component: HomeComponent 
  },
  { path: 'restaurant/:id', component: ResteauProduitsComponent,canActivate: [AuthGuard], },
  { path: 'restaurant/:id/checkout', component: CheckoutComponent,canActivate: [AuthGuard], },
  { path: 'category/:id/restaurants', component: CategoryRestaurantsComponent,canActivate: [AuthGuard], },// Route pour les restaurants par catégorie
  { path: 'register-delivery', component: RegisterDeliveryComponent }, 
  { path: 'dashboard-delivery', component: DashboardDeliveryComponent },
  { path: 'success', component: SuccessComponent,canActivate: [AuthGuard], },
  { path: 'cancel', component: ErrorComponent,canActivate: [AuthGuard], },
  { path: 'track-order', component: TrakingOrderComponent,canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
