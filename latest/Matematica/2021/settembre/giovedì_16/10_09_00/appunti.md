# Lezione di Matematica (3° ora) 
## Giovedì 16 settembre 2021, 10:10:00

$$
9x^2+4y=36\\
\frac{x^2}{4}+\frac{y^2}{9}=1\\
c(0,0)\\
a=2\\
b=3
$$

$$
P(2,4)
$$

$ricaviamo$ $le$ $funzioni$

$$
4y^2=36-9x^2\\
y^2=9-\frac94 x^2 
$$


$y=\pm\sqrt{9-\frac94 x^2}$
$y=\pm3\sqrt{1-\frac14 x^2}$

$$
\begin{equation} \begin{cases} 
y \geq 0\\
 \end{cases} \end{equation}
$$
$$
\begin{equation} \begin{cases} 
y \leq 0
\end{cases} \end{equation}
$$

---


Solo parte sopra


$y=3\sqrt{1-\frac{x^2}4}=3\left( 1-\frac{x^2}{4} \right)^{\frac12}$
$y^{'}=D\left[ 3\left( 1-\frac{x^2}{4} \right)^{\frac12}\right]$ 
$=3\cdot D \left[\left(1-\frac{x^2}{4}\right)^{\frac12}\right]$
> è una derivata di una $f$ composta

$f^{'}=3\cdot \frac12 \left(1-\frac{x^2}{4}\right)^{\frac12-1}\cdot \left[D(1)-D\left(1-\frac{x^2}4\right)\right]$

$=\frac32\frac{1}{\sqrt{1-\frac{x^2}{4}}}\left(-\frac1{\cancel{4} {}^{\boxed{2}}}\cdot\cancel2x\right )=-\frac34 \cdot\frac{x}{\sqrt{1-\frac14 x^2}}$


---

$y-4=m\cdot(x-2)$



$y-4=-\frac34\frac{x_0}{\sqrt{1-\frac{x_0^2}{4}}}(x-2)$


$$
\begin{equation} \begin{cases} 
y_0-4=-\frac34\frac{x_0}{\sqrt{1-\frac{x_0^2}{4}}}(x-2)\implies T_0 \in t\\
y_0=3\sqrt{1-\frac{x_0^2}{4}}
 \end{cases} \end{equation}
$$


$$
3\sqrt{1-\frac{x_0^2}{4}}-4=-\frac34\frac{x_0^2-2x_0}{\sqrt{1-\frac{x_0^2}{4}}}
$$
$$
\left(4\sqrt{1-\frac{x_0^2}{4}}\right)^2=\left(3-\frac32x_0\right)^2
$$
$$
16-4x_0^2=9+\frac94 x_0^2-9x_0
$$

$$
25x_0^2-36x_0-28=0
$$


$$
x_0=\frac{18\pm\sqrt{324+700}}{25}
=2\lor-\frac{14}{25}$$


$y-=\frac34\frac{x_0}{\sqrt{1-\frac{x_0^2}{4}}}(x-2)$

---

## Equazioni delle simmetrie


$y=x^2+1$
$P(2,4)$

$P^{'}\to P \text{ simmetrico } C$

> (segmento $P^{'}-P$ con $C$ in mezzo)
> $C$ è punto medio del segmento

$P^{'}(x^{'},y^{'})$

$$
\begin{equation} \begin{cases} 
x_c=\frac{x+x^{'}}{2}\\
y_c=\frac{y+y^{'}}{2}
\end{cases} \end{equation}
$$


$$
xeq \begin{equation} \begin{cases} 
2=\frac{x+x^{'}}{2}\\
4=\frac{y+y^{'}}{2}
 \end{cases} \end{equation}\\
\begin{equation} \begin{cases}
x=4-x^{'}\\
y=8-y^{'} \end{cases} \end{equation}
$$


$8-y^{'}=(4-x^{'})^2+1$

$y^{'}=-x^{{'}^{{}^2}}+8x^{'}-9$

## p.42
### es. 123
$$f(x)=4\sqrt{x}+3\sqrt[3]{x}\\
$$
$$
D(f(x))=4\cdot D(x^{\frac12})+3\cdot D(x^{\frac13})\\
$$
$$
D(f(x))=4\frac12x^{\frac12-1}+3\cdot D(\sqrt[3]{x})
$$
$$
D(f(x))=\frac2{\sqrt{x}}+\frac{1}{\sqrt[3]{x^2}}
$$

---
# Derivate

$$
D(k)=0\\
D(x)=1\\
D(\sin x)=\cos x\\
D(\cos x)=-\sin x\\
D(e^x)=e^x\\
D(\ln x)=\frac{1}{x}\\
D(a^x)=a^x\ln a\\
D(\log_ax)=\frac 1{x}\cdot\frac{1}{\ln a}
$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NDk4ODcxODIsNDQ3MDUzMzM3LC0xNT
g0MTExNjQ0LDE5NjI1NDUyMTgsLTIyNTM4NDIwMiwtOTUxNDIx
NDEzXX0=
-->