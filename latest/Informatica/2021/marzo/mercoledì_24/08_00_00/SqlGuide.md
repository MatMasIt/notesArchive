# Ripasso su SQL

## Mattia Mascarello

## Introduzione

Sql è un linguaggio utilizzato per comunicare con un server-database e fornirgli istruzioni per la manipolazione e l'estrapolamento di dati del database stesso

Ecco una breve guida al linguaggio SQL

## Condizioni

```sqlite
campo="valore"
```

```sqlite
campo=1
```

### Operatori logici



```sqlite
campo > 1 AND campo <10
```

```sqlite
campo > 1 OR campo2 = "OK"
```

```sqlite
eta > 18 AND NOT precedentiPenali = TRUE
```

### Like

il "%" in like indica un numero indefinito di caratteri prima della stringa che lo segue o dopo la stringa che lo precede

Ex.

campo 1 in questo caso è "riconoscimento facciale"

per ottenere un valore true nella condizione:

```sqlite
campo1 LIKE "%faccia%"
campo1 LIKE "riconosci%"
```



## Clausole

### Create

```sqlite
CREATE TABLE "{Nome Tabella}" (
	"{Campo Id}"	INTEGER /*INTERO*/ NOT NULL /* NON NULLO*/ PRIMARY KEY /*CHIAVE PRIMARIA (Denota ogni riga in modo univoco)*/AUTOINCREMENT /*INCREMENTA AUTOMATICAMENTE DI 1 OGNI VOLTA*/ UNIQUE /*L'ID È UNICO, PERCHÈ DEVE IDENTIFICARE OGNI RIGA IN MODO UNIVOCO*/,
	"{campo1}"	TEXT NOT NULL,
	"{campo2}"	INTEGER NOT NULL,
	"{campo3}"	DECIMAL,/* Questo campo può essere nullo */
	"eta"	INTEGER NOT NULL CHECK("eta" > 0  AND  "eta" < 100), /* La clausola CHECK({CONDIZIONE}) impone un VINCOLO DI INTEGRITÀ per impedire l'inserimento di valori che non rispettano la condizione */
	"classId"	INTEGER NOT NULL,
	FOREIGN KEY("classId") REFERENCES "Classes"("id") /* Vincolo di integrità: per inserire una riga il valore del campo "classId" deve essere presente nel campo "id" in almeno una riga di "Classes"*/
);
```





### Select

```sqlite
SELECT {elenco dei campi | *} FROM {Tabella} WHERE {CONDIZIONE} 
```

```sqlite
SELECT {Tabella.campo, Tabella2.campo2 | *} FROM {Tabella} JOIN Tabella2 ON Tabella2.campo2 = Tabella.campo {, Tabella.campoA=Tabella2.campoB}  WHERE {CONDIZIONE} 
```

```sqlite
SELECT {Tabella.campo, Tabella2.campo2 | *} WHERE {CONDIZIONE} LIMIT {numero di righe da restituire} OFFSET {righe da saltare nel risultato}
```

### Insert

```sqlite
INSERT INTO {Tabella}({campo1, campo3}) VALUES ({valore1, valore3})
```

```sqlite
INSERT INTO {Tabella} VALUES ({valore1, valore2, valore3})
```



### Update

```sqlite
UPDATE {TABELLA} SET {campo}={valore}, {campo2}={valore2} WHERE {CONDIZIONE}
```



### Delete

```sqlite
DELETE FROM {TABELLA} WHERE {CONDIZIONE}
```



## Esercizio

Segui i passaggi inserendo le query nel pannello *Esegui SQL* e verifica il funzionamento delle query

```sqlite
CREATE TABLE "Classes" (
	"classId"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"className"	TEXT NOT NULL
)
```

![image-20210324101241473](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324101241473.png)

```sqlite
CREATE TABLE "Students" (
	"studentId"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"name"	TEXT NOT NULL,
	"surname"	TEXT NOT NULL,
	"notes"	TEXT,
	"eta"	INTEGER NOT NULL CHECK("eta" > 0  AND  "eta" < 100),
	"classId"	INTEGER NOT NULL,
	FOREIGN KEY("classId") REFERENCES "Classes"("classId")
);
```

![image-20210324101311303](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324101311303.png)

```sqlite
INSERT INTO Classes(className) VALUES ("4E");
INSERT INTO Classes(className) VALUES ("4D");
```

![image-20210324101146709](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324101146709.png)

```sqlite
INSERT INTO Students(name,surname,eta,classId) VALUES ("Mattia","Mascarello",-1,1)
```

> Risultato: CHECK constraint failed: Students
>
> Alla riga 1:
>
> INSERT INTO Students(name,surname,eta,classId) VALUES ("Mattia","Mascarello",-1,1)

```sqlite
INSERT INTO Students(name,surname,eta,classId) VALUES ("Mattia","Mascarello",18,1);
INSERT INTO Students(name,surname,notes,eta,classId) VALUES ("Matilde","Berzia","A friend Of Mine",17,2);
```

> Risultato: query eseguita con successo. Impiegati 0ms, 2 righe modificate
>
> Alla riga 1:
>
> INSERT INTO Students(name,surname,eta,classId) VALUES ("Mattia","Mascarello",18,1)
>
> Alla riga 2:
>
> INSERT INTO Students(name,surname,notes,eta,classId) VALUES ("Matilde","Berzia","A friend Of Mine",17,2);

![image-20210324102620422](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324102620422.png)

```sqlite
SELECT surname,eta FROM Students WHERE eta<18
```

![image-20210324103438515](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324103438515.png)

```sqlite
SELECT Students.surname, Students.eta, Classes.className FROM Students JOIN Classes ON Students.classId=Classes.classId 
```

![image-20210324103919446](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324103919446.png)

```sqlite
SELECT Students.surname, Students.eta, Classes.className FROM Students JOIN Classes ON Students.classId=Classes.classId  WHERE eta>17
```

![image-20210324103955320](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324103955320.png)

```sqlite
SELECT Students.name, Students.notes, Classes.className FROM Students JOIN Classes ON Students.classId=Classes.classId  WHERE Classes.className="4D"
```

![image-20210324104308930](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324104308930.png)

```sqlite
SELECT * FROM Students 
```

![image-20210324104453256](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324104453256.png)

```sqlite
SELECT * FROM Students LIMIT 1
```

![image-20210324104518775](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324104518775.png)

```sqlite
SELECT * FROM Students LIMIT 1 OFFSET 1
```

![image-20210324104548700](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324104548700.png)

```sqlite
UPDATE Students SET name="Giorgia" WHERE studentId=2
```

> Risultato: query eseguita con successo. Impiegati 0ms, 1 righe modificate
>
> Alla riga 1:
>
> UPDATE Students SET name="Giorgia" WHERE studentId=2

![image-20210324104851182](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324104851182.png)

```sqlite
INSERT INTO Students(name,surname,notes,eta,classId) VALUES ("Giovanni","Rana","Y   E   S",22,2);
```

![image-20210324105143589](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324105143589.png)

```sqlite
SELECT * FROM Students WHERE name LIKE "Gio%"
```

![image-20210324105807271](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324105807271.png)

```sqlite
SELECT * FROM Students
```

![image-20210324110105548](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324110105548.png)

```sqlite
DELETE FROM Students WHERE studentId=3
```

> Risultato: query eseguita con successo. Impiegati 0ms, 1 righe modificate
>
> Alla riga 1:
>
> DELETE FROM Students WHERE studentId=3

![image-20210324110239923](/home/mattiaSecond/.config/Typora/typora-user-images/image-20210324110239923.png)