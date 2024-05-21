import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto } from '../../model/model';

@Component({
  selector: 'app-lista-scarpe',
  templateUrl: './lista-scarpe.component.html',
  styleUrl: './lista-scarpe.component.css'
})
export class ListaScarpeComponent {

  constructor(private ps: ProdottiService) { }

  prodotti: Prodotto[] = []
  prodottiFiltrati: Prodotto[] = []
  checkBoxPrezzo: boolean[] = []
  checkBoxColore: boolean[] = []
  checkBoxCategoria: boolean[] = []

  ngOnInit(): void {
    this.ps.getProdotti().subscribe({
      next: (dati) => {
        this.prodotti = dati;
        this.scarpeFiltratePerPrezzo();
        this.scarpeFiltratePerColore();
        this.scarpeFiltrateperCategoria()
      },
      error: (errore) => {
        alert(errore)
      }
    })
  }

  scarpeFiltratePerPrezzo() {

    if (this.checkBoxPrezzo.some(prezzo => prezzo)) {
      this.prodottiFiltrati = this.prodotti.filter((prodotto) => {
        if (this.checkBoxPrezzo[0] == true && prodotto.prezzo >= 50 && prodotto.prezzo <= 100) {
          return true
        }
        if (this.checkBoxPrezzo[1] == true && prodotto.prezzo >= 100 && prodotto.prezzo <= 150) {
          return true
        }
        if (this.checkBoxPrezzo[2] == true && prodotto.prezzo > 150) {
          return true
        }
        return false
      })
    }
    else { this.prodottiFiltrati = this.prodotti }
  }

  listaColori() {
    let colori = new Set<string>(); //crea set di stringe per i colori
    this.prodotti.forEach(prodotto => {
      prodotto.colori_disponibili.forEach(colore => {
        colori.add(colore.includes('/') ? 'multicolor' : colore.toLowerCase()) //aggiunge i colori disponibili al set una sola volta senza ripetizioni
      })
    })
    return Array.from(colori) //restituisce e converte in array il set
  }


  scarpeFiltratePerColore() {
    const coloriSelezionati = this.listaColori().filter((_, index) => this.checkBoxColore[index]);

    if (coloriSelezionati.length > 0) {
      this.prodottiFiltrati = this.prodotti.filter(prodotto => {
        for (let c of prodotto.colori_disponibili) {
          if (coloriSelezionati.includes('multicolor') ? c.includes('/') : coloriSelezionati.includes(c.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    } else {
      this.prodottiFiltrati = this.prodotti;
    }
  }

  listaCategorie() {
    const categorieList = new Set<string>();
    this.prodotti.forEach(prodotto => {
      categorieList.add(prodotto.categoria)
    })
    return Array.from(categorieList)
  }

  scarpeFiltrateperCategoria() {
    const categorieSelezionate = this.listaCategorie().filter((categoria, index) => this.checkBoxCategoria[index]);

    if (categorieSelezionate.length > 0) {
      this.prodottiFiltrati = this.prodotti.filter(prodotto =>
        categorieSelezionate.includes(prodotto.categoria)
      );
    } else {
      this.prodottiFiltrati = this.prodotti;
    }
  }

}
