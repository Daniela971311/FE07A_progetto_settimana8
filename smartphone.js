/*Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare con contratto a ricarica.
Tale interfaccia prevede due variabili d'istanza:

La prima variabile d'istanza e' definita come :

    number carica, e rappresenta il quantitativo di euro
    disponibile per le chiamate.

La seconda variabile d'istanza e' definita come:

    number numeroChiamate, e rappresenta il numero di chiamate effettuate con il cellulare. */
//Le classi FirstUser - SecondUser - ThirdUser devono implementare l'interfaccia con i seguenti metodi 
var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var Gianni = new FirstUser(79, 1);
console.log('---- PRIMO UTENTE ----');
Gianni.chiamata(70);
console.log('Valore della carica disponibile: ' + Gianni.numero404());
console.log('Numero chiamate: ' + Gianni.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
console.log("Numero chiamare: " + Gianni.azzeraChiamate());
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var Simone = new SecondUser(67.2, 1);
Simone.chiamata(30);
console.log('Valore della carica disponibile: ' + Simone.numero404());
console.log('Numero chiamate: ' + Simone.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
console.log("Numero chiamare: " + Simone.azzeraChiamate());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
var Kyle = new ThirdUser(69.2, 1);
Kyle.chiamata(20);
console.log('Valore della carica disponibile: ' + Kyle.numero404());
console.log('Numero chiamate: ' + Kyle.getNumeroChiamate());
console.log("dopo l'azzeramento delle chiamate: ");
console.log("Numero chiamare: " + Kyle.azzeraChiamate());
