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

    SELECT COUNT(*) FROM Quesiti WHERE Docenti.codiceDocente=Scrivono.codiceDocente AND Scrivono.codiceQuesito=Quesito.codiceQuesito AND Quesito.Argomento=:argomento

    SELECT COUNT(*) FROM Quesiti WHERE Quesiti.Argomento=:argomento INNER JOIN ON Scrivono 

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMwMjU1NjkzNywtMTE2MTE2OTI3MV19
-->