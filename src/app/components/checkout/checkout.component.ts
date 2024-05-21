import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { CarrelloService } from '../../services/carrello.service';
import { Prodotto } from '../../model/model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  spedizione!: FormGroup
  ritiro!: FormControl
  pagamento!: FormGroup
  buttonSpedizione: boolean = false
  buttonRitiro: boolean = false
  salvaEContinua: boolean = false
  prodottiAggiunti: Prodotto[] = []
  totale: any
  speseConsegna: number = 5

  constructor(private cs: CarrelloService) { }

  ngOnInit(): void {
    this.spedizione = new FormGroup({
      nome: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z\\s]{1,50}$/)]),
      cognome: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z\-']{1,50}$/)]),
      indirizzo: new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z]+[A-Za-z\d\s,./]*\d+$/)]),
      email: new FormControl("", [Validators.required, Validators.pattern(/[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}/)]),
      telefono: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^((00|\+)39[\. ]??)??3\d{2}[\. ]??\d{6,7}$/)])
    })

    this.ritiro = new FormControl("", [Validators.required, Validators.pattern(/^[A-Za-z]+[A-Za-z\d\s,./]*\d+$/)])

    this.pagamento = new FormGroup({
      numeroCarta: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^[0-9]{13,16}$/)]),
      meseAnno: new FormControl("", [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/(2[2-9]|0[1-9]|[1-9]\d)$/)]),
      cvv: new FormControl<number | null>(null, [Validators.required, Validators.pattern(/^\d{3,4}$/)])
    })

    this.prodottiAggiunti = this.cs.getCarrello()
    this.totale = JSON.parse(localStorage.getItem('totale') as any)
  }

  sceltaSpedizione() {
    this.buttonSpedizione = true
    this.buttonRitiro = false
    this.ritiro.reset()
    this.salvaEContinua = false
  }

  sceltaRitiro() {
    this.buttonRitiro = true
    this.buttonSpedizione = false
    this.spedizione.reset()
    this.salvaEContinua = false
  }

  pagamentoEffettuato() {
    this.cs.svuotaCarrello()
  }

}
