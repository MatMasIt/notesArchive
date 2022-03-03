# Title


1° Teorema fondamentale del calcolo integrale

$$
\int^b_af(x)dx
$$

integrale definito
area di una superficie

restituisce un numero

---


$$
\int f(x)dx
$$

integrale indefinito

Operazione inversa della derivazione

restituisce una classe di funzioni

2° teorema fondamentale del calcolo integrale

$$
F(x)=\intf(t)dt
$$

funzione integrale


$$
\int^\infin_af(x)dt
$$

integrale improprio



----



area sotto curve

$$
f(x) > 0\quad \forall x \in [a,b]
$$

$$
\Delta x = \frac{b-a}n$$



Somma di Riemann

                    /|
                   /||
          ________/|||
         /||||||||||||
        /|||||||||||||
		----------------------

Divido curva  in più rettangoli possibili

approssima o per difetto e per eccesso 

spiù piccoli i rettangoli maggiore è la precisione


$$
A= S_n=\sum_{i=1}^n f(c_i)\Delta x
$$

per l'area sotto la curva esatta occorrono infiniti rettangoli di risoluzione

Somma secondo riemannn, integrale definito

$$
\lim_{x\to \infin}S_n=\int^b_af(x)dx=\int^b_af(t)dt
$$


---

$$
\int^1_{-1}x^2-1dx=-\frac43
$$


Per le funzioni dispari se prendiamo un intervallo uguale positivo e negativo adiacenti a $0$ si annullano e l'integrale risulta $=0$


--        

              /  
         / 
     /
    a------c-----b


Proprietà
$$
\int^b_af(x)dx=\int^c_af(x)dx+\int^b_cf(x)dx
$$


---


$$
\int^b_a[f(x)\pm g(x)]dx=\int^b_af(x)dx+\int^b_ag(x)dx
$$



---

Osservazioni


$$
\int^b_a[f(x)-g(x)]dx
$$


$$
=\int^b_af(x)dx-\int^b_ag(x)dx
$$

$$
=\int^b_af(x)dx+\int^b_a-g(x)dx
$$


3 funzioni chiuse tra di loro (formano figura)

tutte percorse in senso orario
l'aria racchiusa è calcolabile come somma di integrali delle funzioni


--

$$
v(t)=\dot s(t)=\frac{ds(t)}{dt}=2t-3
$$


p.280


$F$ è primitiva di $f$ se 
* $F$ è **derivable**
* La  derivata di $F$ è $f$

ci sono più funzioni primitive di un altra
è una famiglia di funzioni

Integrale indefinito

$$
\int f(x)dx=F(x)+c
$$


Tabella integrali


$$
\int k dx = kx+c
$$

$$
\int \sin x dx = -\cos x +c
$$


$$
\int \cos x dx = \sin x +c
$$

$$
\int e^xdx=e^x+c
$$


$$
\int x^\alpha dx =\frac{x^{\alpha+1}}{\alpha+1}+c
$$

$$
\int \frac{1}{\cos^2 x}dx=\tan x +c
$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzI0NjA2MzQsNzMzMTQzNDU4LC0zNjk4Mj
YyMzQsLTE2NDc5NzEwMDQsLTI0MTU0MjgzMywtMTc1MDI1MTYw
NiwtNTM4NjE4NTUzLC0xOTQ2NjEzNTgsLTE3MTQwODM1MzVdfQ
==
-->