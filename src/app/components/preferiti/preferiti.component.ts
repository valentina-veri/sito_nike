import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Preferiti, Prodotto } from '../../model/model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent {
  preferiti: Preferiti[] | undefined = []
  errorMessage = ''
  constructor(private ps: ProdottiService, private as: AuthService, private router: Router, private cs: CarrelloService) { }

  ngOnInit(): void {
    this.ps.getPreferiti().pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorMessage = err.error
        return of(undefined)
      })
    ).subscribe({
        next: (dati) => { this.preferiti = dati },
        error: (errore) => {
          alert(errore)
        }
      })
  }


  elimina(index: number) {
    if (confirm("Sei sicuro di voler rimuovere l'articolo?")) {
      this.ps.deletePreferito(index).subscribe({
        next: () => {
          this.preferiti = this.preferiti?.filter(p => p.id !== index)
          alert('Elemento rimosso dai preferiti')
        },
        error: (errore) => {
          alert(errore)
        }
      })
    }
  }

  aggiugniAlCarrello(scarpa: Prodotto) {
    this.cs.addAlCarrello(scarpa)
    alert('Elemento aggiunto al carrello.')
  }
}
