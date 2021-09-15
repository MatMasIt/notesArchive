# Lezione di Fisica (3° ora)

## mercoledì 15 settembre 2021, 10:06:00

Sintesi di termodinamica

Tre grandezze

* $\Delta U$ energia interna
* $Q$ calore
* $W$ lavoro



Movimento: forza che produce spostamento
Forza per spostamento = lavoro = energia

### Primo principio della termodinamica


$$
\boxed{\Delta U=Q-W}
$$

### Convenzione dei segni

|Grandezza|Condizione|Segno|
|---|---|---|
|Calore|_Il ==sistema **acquista** calore==_, l'ambiente cede/fornisce calore|$Q > 0$|
|Calore|_Il ==sistema **cede** calore==_, l'ambiente acquista calore|$Q < 0$|
|lavoro|Il ==sistema **esegue** lavoro== sull'ambiente|$W > 0$|
|Lavoro|L' ==**ambiente esterno** esegue lavoro sul sistema==|$W < 0$|



Urti delle particelle sulle pareti

$P=\frac{F_{particelle}}{S}$  pressione 


Grandezze "in gioco" in un contenitore ermetico:
* $P$ pressione
* $V$ volume

Equazioni dimensionali

$[P\cdot V]=[P]\cdot[V]=\frac{[F]}{\cancel{[L^2]}}\cdot \cancel{[L^3]}=[F]\cdot[L]=[W]$ (*forza per distanza è lavoro*)

#### Isobara
![](https://i.imgur.com/jqjFwYW.jpg)

![Isobara](https://i.imgur.com/XsRhDOV.jpg)



Area rettangolo: lavoro della trasformazione

----

![Curva](https://i.imgur.com/3RsXUhZ.jpg)

In una qualunque trasormazione l'area sotto la curva corrisponde al lavoro, in questo caso una curva formata da 2 trapezi


---

Si presuppone che le particelle si muovano nelle 3 direzioni nello stesso identico modo

Velocità media per x è $\frac13$ della quadratica media $\left( v_x^2=\frac13 v_m^2 \right)$

---
|||
|---|---|
|$PV=nRT$|$R=8,31\frac{J}{mol\cdot K}$|

$n=\frac{N}{N_A}$

k: costante di Boltzmann

 $k=\frac{R}{N_A}=1,38\cdot 10^{-23}\frac{J}{\text{K}}$

$pV=\frac{N}{\boxed{N_A}}\boxed{R}T=N\boxed{k}T$


> $$
> PV=\frac23NK_m
> $$

$K_m$= enegia cinetica media



$\frac23 \cancel{N}K_m=\cancel{N}kT$

> $$
> K_m=\frac{3}{2}kT
> $$
> _L'energia cinetica media di un sistema dipende esclusivamente dalla sua temperatura_



> $$
> \Delta U= N\cdot K_m = \frac32 kT
> $$
> _L'energia interna di un sistema è una funzione di stato, ovvero ==dipende dallo stato istantaneo, no dalla trasformazione che la porta da uno stato all'altro==_




Il $3$ in $\frac32$ corrisponde alle direzioni, ma le particelle potrebbero muoversi anche in altri modi (movimenti rispetto a se stesse rotatori, etc), che si chiamano ==gradi di libertà==


Nelle molecole biatomiche

$\frac32 \to \frac 52$ 

$K_m=\frac52kT$

Sette gradi di libertà?

$K_m=\frac72 kT$


 ---
Noi immaginiamo trasformazioni reversibili

* Isobare A pressione costante
* Isocore A volume costante
* Isoterme a temperatura Costante
* Adiabatiche senza scambi di calore con l'esterno


## Isobare ⇒ $P=k$ pressione costante

$PV=nRT$

Separo costanti $n,R,P$ dalle variabili 
$\frac{V}{T}=\frac{nR}{P}$

$$
\frac{V_0}{T_0}=\frac{V_1}{T_1}
$$

![](https://i.imgur.com/YmDKzdm.jpg)

$W=\overline{P}\cdot \Delta V=\overline{P}\cdot (V_f-V_I)$
## Isocore ⇒ $V=k$ volume costante

$\boxed P \cdot  \boxed V= n R \boxed T$

Sepraro costanti $n,R,V$ da variabili

$\frac{P}T=\frac{nR}V$

$$
\frac{P_0}{T_0}=\frac{P_1}{T_1}
$$


![](https://i.imgur.com/Sz7l7Hs.jpg)

Non c'è area sotto curva, $W=0$

Il lavoro non può essere presente anche siccome il $V$ è costante

## Isoterma ⇒ $T=k$ temperatura costante
$PV=\boxed{nRT}$
$T$ costante

$$
P_0V_0=P_1V_1
$$
(legge di _Boyle_)

![](https://i.imgur.com/I8LSS7P.jpg)

$W=NkT\ln\frac{V_f}{V_i}$

$W=nRT\ln\frac{V_g}{V_i}$

		calcolato con un integrale


## Adiabatica ⇒ $Q=0$ no scambi di calore con esterno

$PV^{\gamma}=c$ ($c$ è una costante)

$P=\frac{c}{V^\gamma}$ ($y=\frac{c}{x^k}$: funzione che ==decresce rapidamente== e **non** è simmetrica) 

$W=\frac{kT}{\left( 1-\gamma \right) V^{\gamma-1}}$

		calcolato con un integrale

---
## Esercizi

### p. 390 es .1

> Dati
> $v=500 \frac{Km}{h}=138,9 \frac{m}{s}$
> $\Delta T=?$
> $\overline{K_m}=\frac23K_{m_p}$
> $c=120 \frac{J}{Kg\text{K}}$


Legame tra calore ed energia cinetica

$$
Q=mc\Delta T
$$
_Legge fondamentale della termologia_


Il calore è una forma di energia
Tutta l'energia rimasta viene utilizzata per innalzare la temperatura (_assunzione_)


$K_{m_p}=\frac12mv^2$
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NTc3NTI4NDksODYxNjA4MTQ4LDE5Nz
I0NTYxNDIsNjU2ODA0NTQ5LDQxMjIxMjA5MCwtMTk5ODc0Njc2
NSwtMTM2ODkyMjM5NywyNzU4NDEyODBdfQ==
-->