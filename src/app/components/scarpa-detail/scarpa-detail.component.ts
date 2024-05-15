import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-scarpa-detail',
  templateUrl: './scarpa-detail.component.html',
  styleUrl: './scarpa-detail.component.css'
})
export class ScarpaDetailComponent {
  scarpa!: Prodotto
  coloreSelezionato: boolean = false
  tagliaSelezionata: boolean = false
  messaggioSpanColore: boolean = false
  messaggioSpanTaglia: boolean = false
  IndexColore: number = -1
  IndexTaglia: number = -1

  constructor(private ps: ProdottiService, private cs: CarrelloService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!);
      this.ps.getProdottoById(id).subscribe(
        dati => this.scarpa = dati)
    })
  }

  selezionaColore(i: number) {
    this.coloreSelezionato = true
    this.IndexColore = i
    this.messaggioSpanColore = false
  }

  selezionaTaglia(i: number) {
    this.tagliaSelezionata = true
    this.IndexTaglia = i
    this.messaggioSpanTaglia = false
  }

  aggiungiAlCarrello() {
    if (this.tagliaSelezionata == false) {
      this.messaggioSpanTaglia = true
    }
    if (this.coloreSelezionato == false) {
      this.messaggioSpanColore = true
    }
    if (this.tagliaSelezionata && this.coloreSelezionato) {
      this.cs.addAlCarrello(this.scarpa)
    }

  }

}
