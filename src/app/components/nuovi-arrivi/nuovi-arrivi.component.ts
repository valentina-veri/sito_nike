import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-nuovi-arrivi',
  templateUrl: './nuovi-arrivi.component.html',
  styleUrl: './nuovi-arrivi.component.css'
})
export class NuoviArriviComponent {
  nuoviArrivi: Prodotto[] = []


  constructor(private ps: ProdottiService) { }

  ngOnInit(): void{
   
    this.ps.getProdotti().subscribe(dati => this.nuoviArrivi = dati.filter(prodotto =>prodotto.nuovo_arrivi==true))
  }
  

}
