import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ResteauProduitsComponent } from './pages/resteau-produits/resteau-produits.component';
import { CategoryRestaurantsComponent } from './pages/category-restaurants/category-restaurants.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MatSelectModule } from '@angular/material/select';
import { RegisterDeliveryComponent } from './pages/register-delivery/register-delivery.component';
import { DashboardDeliveryComponent } from './dashboard-delivery/dashboard-delivery.component';
import { SuccessComponent } from './pages/success/success.component';
import { ErrorComponent } from './pages/error/error.component';
import { TrakingOrderComponent } from './pages/traking-order/traking-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ResteauProduitsComponent,
    CategoryRestaurantsComponent,
    FooterComponent,
    HeaderComponent,
    CardDialogComponent,
    CheckoutComponent,
    RegisterDeliveryComponent,
    DashboardDeliveryComponent,
    SuccessComponent,
    ErrorComponent,
    TrakingOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,          
    MatFormFieldModule,      
    MatInputModule,         
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
