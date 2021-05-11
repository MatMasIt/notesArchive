# Compiti per mercoledì 12 maggio 2021
p 200
es 12

es 13

p 242 
 es 5
 
Docenti(codiceDocente,nome,cognome)
Quesiti(codiceQuestito,Argomento)
Scrivono(codiceDocente,codiceQuesito)
a.

    SELECT COUNT(*) AS TotaleQuesiti FROM Quesiti WHERE Argomento=:argomento

b.

    SELECT COUNT(*) as TotQuesiti  FROM Quesiti WHERE Docenti.codiceDocente=Scrivono.codiceDocente AND Scrivono.codiceQuesito=Quesito.codiceQuesito AND Quesito.Argomento=:argomento
    
oppure

    SELECT COUNT(*) AS TotQuesiti FROM Quesiti INNER JOIN Scrivono ON Scrivono.codiceQuesito=Quesiti.codiceQuesito WHERE Quesiti.Argomento=:argomento AND Scrivono.codiceDocente=:codiceDocente

c.

    SELECT COUNT(*) as Totquesiti FROM Quesiti GROUP BY Argomento 


d.

    SELECT codiceDocente FROM Scrivono GROU

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk3NDMwNjAxMiwtMTE2MTE2OTI3MV19
-->