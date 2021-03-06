# Lezione di Matematica (2° ora)

## martedì 01 giugno 2021, 08:56:00

### Ripasso sulle derivate

#### Derivate note

|Funzione|Derivata|
|----|----|
|$y=k$|0|
|$y=x^n$|$nx^{n-1}$|
|$y=\sin x$|$y=\cos x$|
|$y=\cos x$|$y=-\sin x$
|$y=\tan x$|$\frac{1}{\cos^2x}=1+\tan^2x$|
|$y=e^x$|$e^x$|
|$y=\ln x$|$\frac1x$|
|$y=a^x$|$y=a^x\cdot\ln a$|
|$y=\log_{a}x$|$\frac{1}{x}\cdot\frac{1}{\ln a}$

#### Operazioni di derivazione

* Addizione algebrica
 $D[f(x)\pm g(x)]=D(f(x))\pm D(g(x))$
 * Derivata di prodotto con costante
 $D[c f(x)]=c\cdot D(f(x))$
* Derivata di un prodotto
$D[f(x)\cdot g(x)]=D(f(x))g(x)+f(x)D(g(x))$ 
* Derivata di un quoziente
$D(\frac{f(x)}{g(x)})=\frac{D(f(x))g(x)-f(x)D(g(x))}{[g(x)]^2}$
* Derivata di $\frac{1}{f(x)}$
$D[\frac{1}{f(x)}=D[f(x)]^-1=-\frac{1}{[f(x)]^2}\cdot f^{'}(x)=-\frac{f^{'}(x)}{f(x)^2}$
* $D[f(x)]^n$:
$t=f(x)\implies D(t^n)$
$\frac{dt^n}{\cancel{dt}}\cdot\frac{\cancel{dt}}{dx}=\frac{d(t^n)}{dx}$


---

$$
305)\\
f(x)=\frac{1}{(5x-4)^2}=(5x-4)^{-2}\\
f^{'}(x)=-2(5x-4)^{-3}\cdot 5=\frac{-10}{(5x-4)^3}=-\frac{10}{(5x-4)^3}$$

---

$$
307)\\
f(x)=(2x^2-1)(x+5)\\
f^{'}(x)=4x(x+5)+(2x^2-1)=4x^2+20x+2x^2-1=
6x^2+19
$$

---

$$
309)\\
f(x)=\ln(x^4-x^2-1)\\
f^{'}(x)=\frac{1}{x^4-x^2-1}(4x^3-2x)=\frac{4x^3-2x}{x^4-x^2-1}
$$

---

$$
320)\\
f(x)=\tan^2(3x+1)
$$

Ci sono tre cose

$f(x)=\boxed{\tan}^{\boxed{2}}(\boxed{3x+1})$

Quindi

$f^{'}(x)=\frac{d\tan^2(2x+1)}{dx}=\frac{dy^2}{dx}=\frac{dy^2}{dy}\frac{dy}{dx}=\\2y\cdot\frac{d\tan(2x+1)}{dx}$


$f^{'}(x)=2\tan(2x+1)\cdot\frac{1}{\cos^2(2x+1)}\cdot 2$


$$
\boxed{
\text{
Pag. 46 es 318, 219, 
323, 324, 325, 328, 333
}
}
$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjIyNzI1NDc1LC0yMzAwNzg0NDIsMTUyMD
I0NzU0NiwtMzYwNjkxMjQsNTI1NTg3MjczXX0=
-->