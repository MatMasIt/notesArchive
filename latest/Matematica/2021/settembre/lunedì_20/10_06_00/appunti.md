# Lezione di Matematica (3° ora)
## Lunedì 20 settembre 2021, 10:07:00
### Applicazioni delle ==derivate== allo ==studio di funzione==
![](https://i.imgur.com/vrpCbq7.jpg)
Individuare la _monotonia_ della funzione

> **Monotonia**: intervallo in cui una funzione può esssere crescente o decrescente
> |tangente|funzione|
> |---|---|
> |$\left(\frac{df}{dx}\right) > 0$|Crescente|
> |$\left(\frac{df}{dx}\right) < 0$|Descrescente|
> |$\left(\frac{df}{dx}\right) = 0$ |Massimo /Minimo|

Derivare più volte
$$
y=ax^2+bx+c\\
y^{'}=2ax+b\\
y^{''}=2a
$$

$a$ è la ==concavità== della funzione
![](https://i.imgur.com/Ke1hZ55.jpg)


Punti in cui funzione ==cambia di concavità==: ==$flessi$==


### Studio di funzione
1. Dominio
2. Simmetrie
3. Intersezione con gli assi $\to$ con ==_Metodo di Newton_== se necessario
4. Segno
5. _condizioni agli estremi del campo di esistenza_ (==limiti==)
6. Derivata prima $\implies$ punti di stazionarietà
7. Monotonia
8. Derivata seconda $\implies$ flessi $\implies$ ==tangente== nei punti di flesso
![](https://i.imgur.com/szi250N.jpg)
9. Concavità

 ---
 ### p.223 es 164
![](https://i.imgur.com/gmPKbKn.jpg)
 
 $y=\ln^2(x)$

Osservazioni

$\text{\textcircled{1}}y=\ln(x)$


$\text{\textcircled{2}}y=\ln(x^2)$

==Nei calcoli== $2\ln(x)$

$$
\text{\textcircled{1}} C.E. x^2 > 0 \to x n\neq 0\\
\text{\textcircled{2}} C.E. x > 0
$$

#### $1$ Dominio

$x > 0$

#### 2. $\cancel \exist$ simmetrie evidenti

#### 3.
$$
\begin{equation*} \begin{cases} 
y=0\\
\ln^2x =0
\end{cases} \end{equation*}
\begin{equation*} \begin{cases} 
y=0\\
\ln x =0
 \end{cases} \end{equation*}
 \begin{equation*} \begin{cases} 
y=0\\
x=1
\end{cases} \end{equation*}
A(1,0)
$$
$$
\cancel {\begin{equation} \begin{cases} x=0 \end{cases} \end{equation}}
$$
#### 4. segno

$\ln^2 x > 0 \to \forall x \in D \lor x \neq 1$

#### 5. (Ignorata)
#### 6. Derivata $f^{'}$
Derivata di una funzione composta
$y=\ln^2$

$y^{'}=2\ln x\cdot \frac1x=\frac2x\ln x$
$D^{'}=D$

$y^{'}=0\to\frac{\ln x}{\cancel x}=0\to \ln x=0\to x=1$
#### 7. Monotonia

$\frac{\cancel 2 \ln x}{x} > 0$

$N \ln x >  0 \to x > 1$
$D x > 0 \to x > 0$

|||$0$||$1$||
|---|---|---|---|---|---|
|$N$|$\cancel D$|$\#$|$+$|$\#$|$+$
|$D$|$\cancel D$|$\#$|$-$|$\#$|$+$|
|$F$|$\cancel D$|$\#$|$\boxed -$|$\#$|$\boxed+$


$x=1$ è un minimo relativo della funzione

#### Derivata seconda $f^{''}$

$y^{'}=\frac{2\ln x}{x}$
$$
y^{''}=2\frac{\frac1xx-\ln x}{x^2}=2\frac{1-\ln x}{x^2}
$$

$y^{''}=0$
$\frac{1-\ln x}{\cancel{x^2}}=0$

$\ln x=1 \to \ln x = \ln e \to  x=e$

##### - Concavità

$$
\frac{2(1-	ln x)}{x^2}> 0
$$
$N \ln x < 1 \to x < e$
$D x^2 > 0 \to x \neq 0$


|||$0$||$1$||
|---|---|---|---|---|---|
|$N$|$\cancel D$|$\#$|$+$|$\#$|$-$
|$D$|$\cancel D$|$\#$|$+$|$\#$|$+$|
|$F$|$\cancel D$|$\#$|$\boxed +$|$\#$|$\boxed -$


$$
x=e\text{ Flesso  }\\
f(e)=(\ln e)^2=1
$$

$+\to$ concavità ==verso l'alto==
$-\to$concavità ==verso il basso


$f^{'}(e)=\frac{2\ln e}{e}=\frac2e=0,7$
$(e,1)$

$y-1=\frac2e(x-e)$
$y-1=\frac2ex-2$
$y=\frac2ex-1$

---
### Studio di funzione es. 2
$$
y=x^3-x+1
$$

#### Dominio
$(-\infin,+\infin)$
#### Simmetrie
$$
f(-x)=-x^3+x+1=-(x^3-x-1)
$$

Parte dentro il raccoglimento uguale alla funzione iniziale? $No$

$Quindi$

$f(x)=-f(x)$

Non esistono simmetrie evidenti

#### Intersezione con assi
$$
\begin{equation} \begin{cases} 
y=0\\
\boxed{x^3-x+1=0} \to\text{ per via grafica}
 \end{cases} \end{equation}
$$


$x^2=x-1$
$f_1:y=x^3$
$f_2:x-1$

---
![](https://i.imgur.com/rALS2q1.jpg)
$\alpha \in (-2,-1)$




$f(-2)=(-2)^3-(-2)+1=-8+2+1=-5 < 0$
$f(-1)=(-1)^3-(-1)+1=-1$
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQzMTY4NDQ2OSwxNTIyOTAzNzM1LDExMD
I4NzYwNzQsMTk3ODgzNTQ0MywtMjA3OTI3NDQ1MCwxMTcwNDA3
MTcyLDE1MTM0NDY0NTAsMTUxMzQ0NjQ1MCwxNTUzNjc4NDI1LD
Y2Nzk1NzQ2OCwxNzg3MDg5Njk0LDYwNzQyNTk3LC04NTU0NDMz
MjEsLTYxMzI0MjMyMl19
-->