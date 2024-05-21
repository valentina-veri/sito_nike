import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaScarpeComponent } from './components/lista-scarpe/lista-scarpe.component';
import { ScarpaDetailComponent } from './components/scarpa-detail/scarpa-detail.component';
import { CategorieScarpeComponent } from './components/categorie-scarpe/categorie-scarpe.component';
import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaScarpeComponent,
    ScarpaDetailComponent,
    CategorieScarpeComponent,
    NuoviArriviComponent,
    BestSellerComponent,
    CarrelloComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
