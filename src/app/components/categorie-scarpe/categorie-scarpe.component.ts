import { Component } from '@angular/core';
import { Prodotto } from '../../model/model';
import { ProdottiService } from '../../services/prodotti.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie-scarpe',
  templateUrl: './categorie-scarpe.component.html',
  styleUrl: './categorie-scarpe.component.css'
})
export class CategorieScarpeComponent {

  prodotti: Prodotto[] = []
  categoria: string = ''

  constructor(private ps: ProdottiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
      this.ps.getProdottoByCategoria(this.categoria).subscribe(
        dati => this.prodotti = dati)
    })
  }
}


