# Lezione di Matematica (3° ora)

## mercoledì 09 giugno 2021, 10:00:00

### Ripasso sulle derivate

# Metodo di Newton

Moto uniformemente accellerato
$s=s_{0}+v_{0}t+\frac12at^2$
$v(t)=\frac{ds(t)}{dt}=v_{0}+\frac{1}{\cancel{2}}a\cancel{2}t=v_{0}+at$
$a(t)=\frac{dv(t)}{d(t)}=a$

$\frac{d^2s(t)}{dt^2}=a(t)=\frac{dv(t)}{dt}=a$

![](https://i.imgur.com/y9XS6zO.jpg)




Tutte le volte che calcolo la derivata seconda della funzione trovo i punti in cui la funzione muta concavità (ponendo $f^{''}(x)=0$)

> Ponendo la derivatta seconda uguale a $0$ troviamo i $flessi$ della funzione

---

![](https://i.imgur.com/AKTF4Ij.jpg)
|Simbolo|Tipo|$f^{''}(x)$|
|---|---|---|
|$\alpha$|concava|$f^{''}(x)<0$
|$\beta$|convessa|$f^{''}(x)>0$


---



$$
\begin{equation}
\begin{cases}
y=f(x)\\
y=0
\end{cases}
\end{equation}
$$

$\ln x=\sqrt{9-x^2}$

$$
\begin{equation}
\begin{cases}
y=\ln x-\sqrt{9-x^2}\\
y=0
\end{cases}
\end{equation}
$$

Sfrutto la capacità di disegnare  le funzioni per trovare l'intersezione


---
$f(x):y=\ln x$

$g(x):y=\sqrt{9-x^2}$

$$
g(x):\begin{equation}
\begin{cases}
y\geq 0\\
y=9-x^2
\end{cases}
\end{equation}
$$


---

Teorema di esistena delle radici


$y=f(x) \in \mathcal{C}  [a,b)$

Funzioni ==continue==: non si interrompono mai nel loro dominio
![](https://i.imgur.com/2AAXaxJ.jpg)


---
per soddisfare questa condizione

$f(a)\cdot f(b) < 0$
2 condizioni

$$
\begin{equation}
\begin{cases}
f(a)>0\\
f(b)<0
\end{cases}
\end{equation} \lor
\begin{equation}
\begin{cases}
f(a)<0\\
f(b)>0
\end{cases}
\end{equation} 
$$

![](https://i.imgur.com/Ww2E6cp.jpg)

### Metodo di Newton o delle tangenti



![](https://i.imgur.com/xDvMeP6.jpg)

$f^{'}(x) \ll 0 \implies m (a,b)$
$f^{'}(x) \gg 0 \implies m(a,b)$


![](https://i.imgur.com/52gHs40.jpg)


---

$f^{'}(x)=\frac1x+\frac{x}{\sqrt{9-x^2}}$
$^{''}(x) \ll 0$

$$
\boxed{x=b-\frac{f(b)}{f^{'}(b)}}=\text{Ans}-\frac{\ln(\text{Ans})-\sqrt{9-\text{Ans}^2}}{\frac1{\text{Ans}}+\frac{\text{Ans}}{\sqrt{9-\text{Ans}^2}}}
$$

Approssimazioni

|#|$\alpha$|
|---|---|
|2|2,9|
|1|2,828015987|
|2|2,815930021|
|3|2,815727954|
|5|2,815727001|


Esercizio $2$
---

$y=e^x-x+2$

$e^x-x+2=0$

$e^x=x-2$

---

$h(x)=e^x$
$z(x)=x-2$


$\alpha \in(1,3$
$\beta \in (-2,-1)$


$y=f(x)=e^x-x-2$

![](https://i.imgur.com/jxTra0N.jpg)

$f(1) \ll 0$
$f(2) \gg 0$


$y^{'}=f^{'}(x)=e^x-1$
$f^{''}=e^x$, che è sempre $\gg 0$
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkwMzI0NjY1NywxMjI0OTU0ODE2LDE4Mj
gwNjAyODcsMjA1NTQwMjE1NSw1NzU4NTc3NzEsLTc2NTUwMTk0
LC0zMTM4NDQ4NDEsOTQwOTE2NDI5XX0=
-->