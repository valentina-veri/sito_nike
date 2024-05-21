import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Preferiti, PreferitiDTO, Prodotto } from '../model/model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http: HttpClient, private as: AuthService) { }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("http://localhost:3000/prodotti")
  }

  getProdottoById(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>("http://localhost:3000/prodotti/" + id)
  }

  getProdottoByCategoria(categoria: string): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>("http://localhost:3000/prodotti?categoria=" + categoria)
  }

  getPreferiti(): Observable<Preferiti[]> {
    if (this.as.getLoggedUser()) {
      const httpOption = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.as.getLoggedUser()?.accessToken
        })
      }
      return this.http.get<Preferiti[]>(
        "http://localhost:3000/preferiti?userId=" + this.as.getLoggedUser()?.user.id, httpOption
      )
    } else {
      return of([])
    }
  }

  addPreferiti(prodotto:PreferitiDTO): Observable<Preferiti> {
    if (this.as.getLoggedUser()) {
      const httpOption = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.as.getLoggedUser()?.accessToken
        })
      }
      return this.http.post<Preferiti>(
        "http://localhost:3000/preferiti?userId="+ this.as.getLoggedUser()?.user.id, prodotto, httpOption
      )
    } else {
      return of()
    }
  }

  deletePreferito(preferitoId:number){
    if (this.as.getLoggedUser()) {
      const httpOption = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.as.getLoggedUser()?.accessToken
        })
      }
      return this.http.delete<any>(
        "http://localhost:3000/preferiti/"+preferitoId, httpOption
      )
    } else {
      return of()
    }
  }
}
