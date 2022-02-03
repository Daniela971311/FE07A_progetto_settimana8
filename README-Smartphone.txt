Progettare un interfaccia di nome Smartphone, per rappresentare un telefono cellulare
con contratto a ricarica.

Tale interfaccia prevede due variabili d'istanza:

La prima variabile d'istanza e' definita come :

    number carica, e rappresenta il quantitativo di euro
    disponibile per le chiamate. 

La seconda variabile d'istanza e' definita come:

    number numeroChiamate, e rappresenta il numero di chiamate effettuate con il cellulare.
    

    CLASSI

Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
con i seguenti metodi:



		METODI:
ricarica(number credito, double unaRicarica)
chiamata(number credito, double minutiDurata)
numero404()
getNumeroChiamate()
azzeraChiamate()

1) un metodo definito come public void ricarica(double unaRicarica), che ricarica il
telefonino. 


2.) Un metodo definito come public void chiamata(double minutiDurata), 
	che effettua una chiamata di durata in minuti specificata dal parametro esplicito.
	Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la variabile
	contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
	di 0.20 euro per ogni minuto di chiamata).

2) un metodo public number numero404(),
	che restituisce il valore della carica disponibile. 

3) Un metodo public number getNumeroChiamate(), 
	che restituisce il valore della variabile d'istanza numeroChiamate. 

4) Infine, un metodo public void azzeraChiamate(), 	
	che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.


Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.



