import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

prodotti:Prodotto[]=[]
prodottiFiltrati:Prodotto[]=[]
termineRicerca:string=''

constructor(private ps: ProdottiService, private as:AuthService, private router:Router){}

ngOnInit(): void{
  this.ps.getProdotti().subscribe({
    next: (dati) => {
    this.prodotti = dati},
    error:(errore)=>{
      alert(errore)
    }
  })
}

filtraProdotti(){
  this.prodottiFiltrati= this.prodotti.filter(prodotto => prodotto.nome.toLowerCase().includes(this.termineRicerca.toLowerCase()))
}

svuotaInput(){
  this.termineRicerca=''
}

logout() {
  this.as.logout()
  this.router.navigate([''])
}


}
