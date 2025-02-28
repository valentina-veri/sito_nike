import { Injectable } from '@angular/core';
import { Prodotto } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  carrello: Prodotto[] = []
  

  constructor() { this.recuperaCarrello() }


  getCarrello() {
    return this.carrello
  }

  //aggiungi scarpa al carrello e salva nel localStorage
  addAlCarrello(scarpa: Prodotto) {
    this.carrello.push(scarpa);
    this.salvaCarrello()
  }


  salvaCarrello() {
    localStorage.setItem('carrello', JSON.stringify(this.carrello))
  }

  recuperaCarrello() {
    const carrelloSalvato = localStorage.getItem('carrello');
    if (carrelloSalvato) {
      this.carrello = JSON.parse(carrelloSalvato)
    }
  }

  rimuoviDalCarrello(index: number) {
    this.carrello.splice(index, 1)
    this.salvaCarrello()
  }

  svuotaCarrello(){
    localStorage.clear()
  }

}
