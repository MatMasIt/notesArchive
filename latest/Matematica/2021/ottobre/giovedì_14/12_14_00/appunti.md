# Lezione di Matematica (5° ora) 
## Giovedì 14 ottobre 2021, 12:15:00


Cosa ci potrebbe essere in verifica?
* Il calcolo delle derivate
* tangenti
* derivate seconde e concavità della funzione
* Estremo superiore
* Estremo inferiore
* Massimo e minimo
* Punto di accumulazione
* Insieme derivato
* Calcolo differenziale 
* Metodo di newton

---

Calcoliamo una derivata 

$$
y=\ln\left|\frac{kx+1}{k^2x^2+1}\right|
$$


$$
y'=\frac{1}{\left|\frac{kx+1}{k^2x^2+1}\right|}=
$$
Derivata del logaritmo x derivata del valore assoluto per derivata del quoziente
$$
\frac{1}{\left|\frac{kx+1}{k^2x^2+1}\right|}\frac{\frac{kx+1}{k^2x^2+1}}{\left|\frac{kx+1}{k^2x^2+1}\right|}\cdot \frac{k(k^2x^2)-2k^2x(kx+1)}{(k^2x^2+1)^2}
$$

---

$$
\left(f(x)=|x|\implies f'(x)=\frac{x}{|x|}=\frac{|x|}{x}\right)
$$

---

$$
=\frac1{\frac{kx+1}{k^2x^2+1}}\cdot\frac{k^3x^2+k-2k^3x^2-2k^2x}{(k^2x^2+1)^2}
$$

$$
=\frac{\cancel{k^2x^2+1}}{kx+1}\cdot\frac{-k^3x^2-2k^2x+k}{(k^2x^2+1)^{\cancel 2}}=
$$
$$
\boxed{\frac{k(1-2kx-k^2x^2)}{(kx+1)(k^2x^2+1)}}
$$


---


es 408 p 52 


$$
y=\frac{\sqrt{x^2-a^2}}{x^2+a^2}=\frac{(x^2-a^2)^{\frac12}}{x^2+a^2}
$$

---

$$
y'=\frac{\frac1{\cancel 2}(x^2-a^2){\cancel 2 } x(x^2+a^2)-2x\sqrt{x^2-a^2}}{(x^2+a^2)^2}
$$

$$
=\frac{\frac{x(x^2+a^2)}{\sqrt{x^2-a^2}}-2x\sqrt{x^2-a^2}}{(x^2+a^2)^2}
$$


$$
=\frac{x(x^2+a^2)-2x(x^2-a^2)}{(x^2+a^2)^2\sqrt{x^2-a^2}}
$$

$$
=\frac{x(x^2+a^2-2x^2+2a^2)}{(x^2+a^2)^2\sqrt{x^2-a^2}}
$$
$$
\frac{x(3a^2-x^2)}{(x^2+a^2)^2\sqrt{x^2-a^2}}
$$

---


es 94 p33

$$
A=\left\{x \in \R: x=\frac{3n+1}{n},n\in \N-\{0\}\right\}
$$
> La funzione è per $x$

Se voglio vederlo graficamente devo usare $y=\frac{3x+1}{x}$

omografica
asindoti:
* $D=0\implies x=0$
* $\frac{3x}{x}\implies x=3$

Graficamente
![](https://i.imgur.com/JScaX7B.jpg)

Per elencazione

$$
A=\left\{4,\frac72,\frac{10}3,...\right\}
$$

L'insieme è discreto

$$
\inf(A)=3
$$
i valori diventano sempre più piccoli ma non arrivano mai al valore $3$, che è l'estremo inferiore (giacchè è l'asindoto)

$$
\sup(A)=4
$$
e
$$
\max(A)=4
$$


Punto di accumulazione: $3$

$$
A'=\{3\}
$$




---
$$
A=\left\{x\in \R: x=\cos n\pi, n \in \N\right\}
$$

$$
y=\cos\pi x
$$
$$
T=\frac{2\pi}{\pi}=2
$$

![](https://i.imgur.com/BaQZ62Q.jpg,)


$$
A=\left\{-1,1\right\}
$$


$$
\inf(A)=-1\quad \min(A)=-1\\
\inf(A)=1\quad \max(A) = 1 
$$


$$
A'=\{\}= \empty
$$

---
$$
A=\left\{x\in \R \Big | \small \begin{equation*} \begin{cases} 
x^2-4x-5 > 0\\
5x^2-x^2 < 0
\end{cases} \end{equation*}\right\}
$$

$$
 \begin{equation*} \begin{cases} 
(A)x^2-4x-5 > 0\\
(B) 5x^2-x^2 < 0
\end{cases} \end{equation*}
$$

---

$$
(A)
x^2-3x-5=0\\
x=\frac{2\pm\sqrt{4+5}}{1}\\
x=5\\
x=-1
$$


$$
(B) x^2-5x=0\\
x(x-5)=0\\
x=0\\
x=5
$$

---

$$
 \begin{equation*} \begin{cases} 
x < -1 \lor x > 5\\
x < 0 \lor x > 5
\end{cases} \end{equation*}=(-\infin ,-1)\cup (5,+\infin)
$$



				      -1       5
		- - - ---------O       O-------------- - - -


	

---

$$
y=\ln x$
$$
$$
y'=\frac{x}1=x^{-1}
$$
$$
y''=-\frac1{x^2}
$$



$$
-\frac{1}{x^2} > 0\implies \cancel\exists x \in \R
$$



Logaritmo ha semrpe concavità negativa


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNTE2MzU5NTEsMzczNTk1MzkwLDEzNT
MzMTU2NTksMTQ4NzA1NDMyMywtNDk2NDM4MzI0LDE3NTQ1NTc3
MjcsLTE2Mzc0Mjk1NzAsMTA5NDIwMDAxNSwtMTY5MzQ1NTU4Nl
19
-->