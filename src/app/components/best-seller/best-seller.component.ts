import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {

  prodotti: Prodotto[] = []
  
  constructor(private ps: ProdottiService) { }

  ngOnInit(): void{
    this.ps.getProdotti().subscribe({
      next: (dati) => {this.prodotti = dati.filter(prodotto =>prodotto.best_seller>=4)},
      error: (errore)=>{
        alert(errore)
      }
    })
  }

}
