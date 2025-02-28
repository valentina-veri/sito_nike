import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaScarpeComponent } from './components/lista-scarpe/lista-scarpe.component';
import { ScarpaDetailComponent } from './components/scarpa-detail/scarpa-detail.component';
import { CategorieScarpeComponent } from './components/categorie-scarpe/categorie-scarpe.component';
import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'lista-scarpe', component:ListaScarpeComponent},
  {path:'dettaglio-scarpa/:id', component:ScarpaDetailComponent},
  {path:'prodotti/:categoria', component:CategorieScarpeComponent},
  {path:'nuovi-arrivi', component:NuoviArriviComponent},
  {path:'best-seller', component:BestSellerComponent},
  {path:'carrello', component:CarrelloComponent},
  {path:'checkout', component:CheckoutComponent, canActivate:[AuthGuard]},
  {path:'preferiti', component:PreferitiComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
