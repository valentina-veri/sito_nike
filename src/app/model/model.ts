export type Prodotto={
    id:number,
    nome:string,
    categoria:string,
    prezzo:number,
    taglie_disponibili:[string],
    colori_disponibili:[string],
    descrizione:string,
    immagine:string,
    nuovo_arrivi:boolean,
    best_seller:number,
    quantity:number
}

export type Preferiti={
    id:number,
    userId:number,
    prodotto:Prodotto
}

export class PreferitiDTO{
    constructor(
        public prodotto:Prodotto,
        public userId:number
    ){}
}


