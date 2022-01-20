# Lezione di Matematica
## $A$ analisi di funzione

$$
f:y=\frac{x^2+1}{(2x-1)(x-3)}
$$

$D$   $2x+1\neq 0\quad x\neq \frac12$
$x-3\neq 0 \quad x\neq 3$
### 1 Dominio
$$
D=\left(-\infin,\frac12\right)\cup\left(\frac12,3\right)\cup\left(3,+\infin\right)
$$

### 2. Simmetrie
$$
f(-x)=\frac{x^2+1}{2x^2+7x+3}
$$
Non ci sono simmetrie evidenti

### 3. Segno $f(x)> 0$

$$
\frac{x^2+1}{(2x-1)(x-3)}> 0
$$

$$
N> 0 \quad \forall x \in D
$$

D:

			|         |
	\\\\\\\\\          /////////
	       1/2         3
            Valori esterni		

$$
D: x < \frac12 \lor x  > 3
$$

               1/2              3
         --------@--------------@----------
      N     +    |      +       |    +
      D     +    |      -       |    +
      ===========|==============|===========
            +    |       -      |    +


Segno positivo per 


$$
x < \frac12 \lor x  > 3
$$
$$

### 4. asindoti

$$
\begin{equation*} \begin{cases} 
y=0\\
y=f(x)
\end{cases} \end{equation*}
\begin{equation*} \begin{cases} N=0\end{cases} \end{equation*}\implies \cancel{\exists} \cap \text{ con asse }x
$$

$$
\begin{equation*} \begin{cases} 
x=0\\
y=f(x)
\end{cases} \end{equation*}
\begin{equation*} \begin{cases}
x=0\\
y=\frac13
 \end{cases} \end{equation*}
$$

### 5. Limiti


1.
$$
\lim_{x\to-\infin}\frac{x^2+1}{(2x-1)(x-3)}=\frac{+\infin}{+\infin} \quad FI
$$

$$
\xrightarrow[-1=o(2x)\land 1=o(x^2)]{-3=o(x)}
$$

$$
\lim_{x\to 0}\frac{x^{\cancel 2}}{2\cancel x}=\frac12
$$

2.

$$
\lim_{x\to\frac12^-}\frac{x^2+1}{(2x-1)(x-3)}=\frac{\frac54}{0^-\cdot\left(-\frac52\right)}=\frac{\frac54}{0^+}=+\infin
$$

3.

$$
\lim_{x\to\frac12^+}\frac{x^2+1}{(2x-1)(x-3)}=\frac{\frac54}{0^+\cdot\left(-\frac52\right)}=\frac{\frac54}{0^-}=-\infin
$$

4.
$$
\lim_{x\to3^-}\frac{x^2+1}{(2x-1)(x-3)}=\frac{10}{5\cdot 0^-}=\frac{10}{0^-}=-\infin
$$

5.
$$
\lim_{x\to3^+}\frac{x^2+1}{(2x-1)(x-3)}=\frac{10}{5\cdot 0^+}=\frac{10}{0^+}=+\infin
$$


6.
$$
\lim_{x\to+\infin}\frac{x^2+1}{(2x-1)(x-3)}=
$$

7.

$$
\lim_{x\to+\infin}=\text{vedi}(1.)=\frac12
$$

### 6. Asindoti


$$
\lim_{x\to x_0}f(x)=\pm\infin \implies x=x_0 \text{ è asindoto verticale}
$$

Asindoti verticali:

$$
x=\frac12\quad x=3
$$

Asindoti orizzontali:

$$
y=\frac12
$$

### Punti di stazionarietà

$$
y'=\frac{2x(2x^2-7x+3)-(4x-7)(x^2+1)}{(2x^2-7x+3)^2}
$$

$$
y'=\frac{\cancel{4x^3}-14x^2+6x-\cancel{4x^3}-4x+7x^2+7}{(2x^2-7x+3)^2}
$$

$$
y'=\frac{7x^2+2x+7}{(2x^2-7x+3)^2}
$$

$$
y'=0\quad 7x^2-2x-7=0
$$ (cambio segno solo per equazione)

$$
x=\frac{1\pm\sqrt{1+49}}7=\frac{1\pm5\sqrt 2}7
$$

$$
x_\alpha=\frac{1-5\sqrt 2}7
$$

$$
x_\beta=\frac{1-5\sqrt 2}7
$$


---

$$
7'=\frac{-7x^2+2x+7}{(2x^2-7x+3)^2}
$$

$$
y'> 0\quad N> 0\quad -7x^2+2x+7> 0
$$

$$
7x^2-2x-7> 0
$$

$$
\alpha < x < \beta
$$
  
         \             /
          \           /
		---|---------|--
           a\||||||/B
                -
$$
D> 0 \quad \forall x \in D
$$


$$
x=\beta \text{ massimo relativo }
$$


---
Calcolo la funzione nei punti
```
>>> a=(1-5*2**0.5)/7
>>> b=(1+5*2**0.5)/7
>>> ans = a
>>> res=(ans**2+1)/((2*ans-1)*(ans-3))
>>> res
0.16568542494923805
>>> ans = b
>>> res=(ans**2+1)/((2*ans-1)*(ans-3))
>>> res
-0.965685424949238
```
$$
f(\alpha)=0,16
$$

$$
f(\beta)=-0,97
$$


$$
\begin{equation*} \begin{cases} 
y=\frac12\\y=f(x)
\end{cases} \end{equation*}\begin{equation*} \begin{cases} 
y=\frac12\\\frac12=\frac{x^2+1}{2x^27x+3}
\end{cases} \end{equation*}
$$

![](https://i.imgur.com/WUQIk2Q.jpg)


---


## $B$ Analisi di funzione

$$
y=\frac{2x^2-4}{x-3}
$$

### 1. Dominio

$$
D\to x \neq 3\quad (-\infin,3)\cup(3,+\infin)
$$

### 2. Simmetrie

$$
f(-x)=\frac{2x^2-4}{-x-3}\neq\pm f(x)
$$
non ci sono simmetrie evidenti

### 3. Intersezioni con assi

$x$

$$
\begin{equation*} \begin{cases} y=0\\2x^2-4=0 \end{cases} \end{equation*}
$$

### 4. Segno
$$
y > 0\\
N 2x^2-4 > 0\\
D x-3 > 0
$$


$$
N x < -\sqrt{2}\lor x > \sqrt 2\\
Dx > 3
$$

		-sqrt 2  |    sqrt 2 |  3
  N              +               - + +
  - - 
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzM5NTA1NTQ5LDEzMzE4NjAyNjJdfQ==
-->