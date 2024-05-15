import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  prodottiAggiunti: Prodotto[] = []
  quantita: number[] = []

  constructor(private cs: CarrelloService) { }

  ngOnInit(): void {
    this.prodottiAggiunti = this.cs.getCarrello()
    this.quantitaSelezionata()
  }

  eliminaScarpa(index: number) {
    this.cs.rimuoviDalCarrello(index)
    this.prodottiAggiunti = this.cs.getCarrello()
  }

  quantitaSelezionata() {
    //this.quantita = this.prodottiAggiunti.map(() => 1)
    //this.quantita = []
    for (let i = 0; i < this.prodottiAggiunti.length; i++) {
      this.quantita.push(1)
    }
 
  }

  costoTotale() {
    let totale= 0
    for (let i = 0; i < this.prodottiAggiunti.length; i++) {
      totale += this.prodottiAggiunti[i].prezzo * this.quantita[i]
    }
    return totale
  }


}
