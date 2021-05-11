# Compiti per mercoledì 12 maggio 2021
p 200
es 12

es 13

p 242 
 es 5
Tests(codiceTest,codiceDocente)
Docenti(codiceDeocente,nome,cognome)
Quesiti(testo,Argomento)
a.

    SELECT COUNT(*) AS TotaleQuesiti FROM Quesiti WHERE Argomento=:argomento

b.

    SELECT COUNT(*) FROM Quesiti WHERE Quesiti.Argomento=:argomento INNER JOIN Docenti ON Docenti.codiceDocente=

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTU2NjI4MDUyNywtMTE2MTE2OTI3MV19
-->