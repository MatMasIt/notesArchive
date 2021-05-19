# Lezione di Informatica (1° ora)
## mercoledì 12 maggio 2021, 09:23:00
## p.242 es 5
### Progettazione
![](https://raw.githubusercontent.com/MatMasIt/notesArchive/main/latest/Informatica/2021/maggio/mercoled%C3%AC_12/compiti/Esercizio.svg)

### Tabelle
*Quesiti*(**<u>ID</u>**,INSEGNANTE,ARGOMENTO,TESTO)

*HaGiusta*(**<u>IDQ</u>**,**<u>IDR</u>**,PUNTEGGIO)

*HaSbaagliato*(**<u>IDQ</u>**,**<u>IDR</u>**,PUNTEGGIO)

*Risposte*(**<u>ID</u>**,ARGOMENTO,TESTO)

### Queries
a.
```sql
SELECT ARGOMENTO, COUNT(*) AS NUMEROQUESITI FROM QUESITI WHERE ARGOMENTO=:argomento
```
b.
```sql
SELECT COUNT(*) AS NUMEROQUESITI FROM QUESITI WHERE ARGOMENTO=:argomento AND INSEGNANTE=:insegnante
```
c.
```sql
SELECT COUNT(*) AS NUMEROQUESITI FROM QUESITI GROUP BY ARGOMENTO
```
d.
```sql
SELECT INSEGNANTE FROM QUESITI GROUP BY INSEGNANTE HAVING COUNT(*)>10
```
e.
```sql
DELETE * FROM QUESITI WHERE ARGOMENTO=:argomento
```
