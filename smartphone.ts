/*Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
Tale interfaccia prevede due variabili d'istanza:

La prima variabile d'istanza e' definita come :

    number carica, e rappresenta il quantitativo di euro
    disponibile per le chiamate. 

La seconda variabile d'istanza e' definita come:

    number numeroChiamate, e rappresenta il numero di chiamate effettuate con il cellulare. */
    
interface Smartphone {
    carica: number;
    numeroChiamate: number;

    
    // 1) un metodo definito come public void ricarica(double unaRicarica), che ricarica il telefonino. 
    ricarica(unaRicarica: number): void;

    /* 2.) Un metodo definito come public void chiamata(double minutiDurata), che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
	 Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la variabile contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
	 di 0.20 euro per ogni minuto di chiamata).*/
    chiamata(minutiDurata: number): void;

    // 2) un metodo public number numero404(), che restituisce il valore della carica disponibile. 
    numero404(): number;

    // 3) Un metodo public number getNumeroChiamate(), che restituisce il valore della variabile d'istanza numeroChiamate. 
    getNumeroChiamate(): number;

    // 4) Infine, un metodo public void azzeraChiamate(), 	che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.
    azzeraChiamate(): void;
}

//Le classi FirstUser - SecondUser - ThirdUser devono implementare l'interfaccia con i seguenti metodi 


class FirstUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;
   

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica = this.carica- ( minutiDurata * 0.20);
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    
    public azzeraChiamate() {
       return this.numeroChiamate = 0;

    }
}

let Gianni = new FirstUser(79, 1);
console.log ('---- PRIMO UTENTE ----');
Gianni.chiamata(70);
console.log('Valore della carica disponibile: ' + Gianni.numero404());
console.log('Numero chiamate: ' + Gianni.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
console.log("Numero chiamare: "+Gianni.azzeraChiamate());


class SecondUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;
   

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica = this.carica- ( minutiDurata * 0.20);
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    
    public azzeraChiamate() {
       return this.numeroChiamate = 0;

    }
}

let Simone = new SecondUser(67.2, 1);
Simone.chiamata(30);
console.log('Valore della carica disponibile: ' + Simone.numero404());
console.log('Numero chiamate: ' + Simone.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
console.log("Numero chiamare: "+Simone.azzeraChiamate());

class ThirdUser implements Smartphone {
    public carica: number;
    public numeroChiamate: number;
   

    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }

    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {
        this.carica = this.carica- ( minutiDurata * 0.20);
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    
    public azzeraChiamate() {
       return this.numeroChiamate = 0;

    }
}

let Kyle = new ThirdUser(69.2, 1);
Kyle.chiamata(20);
console.log('Valore della carica disponibile: ' + Kyle.numero404());
console.log('Numero chiamate: ' + Kyle.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
console.log("Numero chiamare: "+Kyle.azzeraChiamate());
