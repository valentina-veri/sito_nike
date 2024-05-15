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
    this.ps.getProdotti().subscribe(dati => {
      this.prodotti = dati;
      this.scarpeFiltratePerPrezzo();
      this.scarpeFiltratePerColore();
      this.scarpeFiltrateperCategoria()
    });
  }

  scarpeFiltratePerPrezzo(){

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

    if (this.checkBoxColore.some(colore => colore)) { // Verifica se almeno una casella di controllo è selezionata
      const coloriSelezionati = this.listaColori().filter((colore,index) => this.checkBoxColore[index]);
      // Ottieni i colori selezionati basati sullo stato delle caselle di controllo

      this.prodottiFiltrati = this.prodotti.filter(prodotto => {
        if (coloriSelezionati.includes('multicolor')) {
          return prodotto.colori_disponibili.some(c => c.includes('/'));
        } else {
          return prodotto.colori_disponibili.some(c => coloriSelezionati.includes(c.toLowerCase()));
        }
      });
    } else {
      this.prodottiFiltrati = this.prodotti; // Nessuna casella di controllo selezionata, mostra tutti i prodotti
    }
  }

  listaCategorie() {
    const categorieList = new Set<string>();
    this.prodotti.forEach(prodotto => {
      categorieList.add(prodotto.categoria)
    })
    return Array.from(categorieList)
  }

  scarpeFiltrateperCategoria(){
    if (this.checkBoxCategoria.some(cat => cat)) {
      this.prodottiFiltrati = this.prodotti.filter((prodotto) => {
        for (let i = 0; i < this.checkBoxCategoria.length; i++) {
          if (this.checkBoxCategoria[i] && prodotto.categoria === this.listaCategorie()[i]) {
            return true;
          }
        }
        return false;
      });
    } else {
      this.prodottiFiltrati = this.prodotti;
    }
  }

}
