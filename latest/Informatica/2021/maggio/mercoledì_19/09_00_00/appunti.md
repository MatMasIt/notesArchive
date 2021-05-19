# Lezione di Informatica (1° ora)
## mercoledì 19 maggio 2021, 09:00:00

# [Esercizio 10](http://www.edutecnica.it/informatica/dbrx/dbrx.htm)


 ## Entità-Relazione
 ![](https://raw.githubusercontent.com/MatMasIt/notesArchive/main/latest/Informatica/2021/maggio/mercoled%C3%AC_19/09_00_00/Entit%C3%A0relazione.svg)
## Modello relazionale

Immobili(<u>idImmobile</u>,città,tipo)
Locatari(<u>codiceFiscale</u>,nome,cognome)
ContrattiAffitto(<u>IdContratto</u>,durata,*<u>codiceFiscale</u>*,*<u>IdImmobile</u>*)
Rate(<u>IdRata</u>,pagata,costo,*<u>idContratto</u>*)
Manutenzioni(<u>IdManutenzione</u>,costo,data,*<u>IdImmobile</u>*)

## Query

1. 
```sql
SELECT * FROM Locatari WHERE codiceFiscale IN (SELECT codiceFiscale FROM ContrattiAffitto WHERE DURATA > 2)
```
2.
```sql
SELECT città, COUNT(*) FROM Immobili GROUP BY città
```
3.
```sql
SELECT * FROM ContrattiAffitto WHERE idContratto IN (SELECT idContratto FROM Rate WHERE pagata=FALSE GROUP BY IdContratto HAVING COUNT(*) > 3)
```
4.
```sql
SELECT SUM(costo) FROM Manutenzioni, ContrattiAffitto, Locatari  WHERE Manutenzioni.idImmobile=ContrattiAffitto.idImmobile AND ContrattiAffitto.codiceFiscale=Locatari.codiceFiscale  AND Manutenzioni.data BETWEEN "2007-01-01" AND "2007-12-12" AND Locatari.cognome="Rossi"
```
5.
```sql
SELECT data FROM Manutenzioni, ContrattiAffitto, Locatari  WHERE Manutenzioni.idImmobile=ContrattiAffitto.idImmobile AND ContrattiAffitto.codiceFiscale=Locatari.codiceFiscale  AND Manutenzioni.costo > 3500 and Locatari.cognome="Bianchi"
```
6.
```sql
SELECT sum(costo) FROM Manutenzioni, Immobili WHERE Manutenzioni.idImmobile=Immobili.idImmobile AND  Manutenzioni.data BETWEEN "yyyy-00-00" AND "yyyy-12-12" GROUP BY Immobili.città
```
7.
```sql
SELECT * FROM Immobili GROUP BY tipo
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTI0OTkwOTgzOV19
-->