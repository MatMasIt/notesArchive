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
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM5MDc4MzkxMSwtMTY5MzQ1NTU4Nl19
-->