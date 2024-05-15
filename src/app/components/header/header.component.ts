import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

prodotti:Prodotto[]=[]
prodottiFiltrati:Prodotto[]=[]
termineRicerca:string=''


constructor(private ps: ProdottiService){}

ngOnInit(): void{
  this.ps.getProdotti().subscribe(dati => 
    this.prodotti = dati)
}

filtraProdotti(){
  this.prodottiFiltrati= this.prodotti.filter(prodotto => prodotto.nome.toLowerCase().includes(this.termineRicerca.toLowerCase()))
}

svuotaInput(){
  this.termineRicerca=''
}


}
