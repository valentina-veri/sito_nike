import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("http://localhost:3000/prodotti")
  }

  getProdottoById(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>("http://localhost:3000/prodotti/" + id)
  }

  getProdottoByCategoria(categoria:string):Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>("http://localhost:3000/prodotti?categoria=" + categoria)
  }

}
