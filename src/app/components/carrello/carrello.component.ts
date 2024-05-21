import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { CarrelloService } from '../../services/carrello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {
  prodottiAggiunti: Prodotto[] = []

  constructor(private cs: CarrelloService, private router: Router) { }

  ngOnInit(): void {

    this.prodottiAggiunti = this.cs.getCarrello()
    this.costoTotale()
  }

  eliminaScarpa(index: number) {
    this.cs.rimuoviDalCarrello(index)
    this.prodottiAggiunti = this.cs.getCarrello()
  }

  costoTotale() {
    let prezzoTotale = 0
    this.prodottiAggiunti.forEach((scarpa: Prodotto) => {
      prezzoTotale += scarpa.prezzo*scarpa.quantity
      this.cs.salvaCarrello()
    })
    return prezzoTotale
  }

  pagamento() {
    localStorage.setItem('totale', JSON.stringify(this.costoTotale()))
    this.router.navigate(['/checkout'])
  }

}
