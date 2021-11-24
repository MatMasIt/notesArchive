# Lezione di Matematica (3° ora)
## Mercoledì 24 nvoembre 2021

### forme di indecisione

$$
\lim_{x\to \infin}\frac{f(x)}{g(x)}=\frac{\infin}{\infin}
$$

#### Risultati
---
$\boxed n$

$f(x)$ è asintotica a $g(x)$
$$
n\quad se\quad f(x)\approx f(x)
$$

---

$\boxed \infin$

$g(x)$ è trascurabile rispetto a $f(x)$

$g(x)=o(f(x))$ 

$o$ piccolo : trascurabile

Sono $\approx$ le stesse funzioni

---

* $$
\lim_{x \to \infin}\frac{x^3+2}{x^4+1}=\frac{+\infin}{+\infin}\quad FI\xrightarrow[1=o(x^4)]{2=o(x^3)}\quad \lim_{x \to +\infin}\frac{x^3}{x^4}\xrightarrow{x^3=o(x^4)} \lim_{x \to \infin}\frac1{x^4}=0^{+}
$$


* $$
\lim_{x\to +\infin}\frac{e^x}{x^7}=\frac{+\infin}{+\infin}\quad FI \xrightarrow{x^8=o(e^x)}
\lim_{x\to +\infin} e^x=+\infin$$




* $$
\lim_{x \to +\infin}\frac{x+5}{\ln x}=\frac{+\infin}{+\infin}\quad FI\xrightarrow[\ln x=o(x)]{5=o(x)}\lim_{x\to +\infin}x=+\infin
$$

* $$
\lim_{x\to -\infin}\left(e^{-x}+x^3\right)=+\infin-\infin \quad FI \xrightarrow{x^3=o(e^{-x})}\lim_{x\to -\infin}e^{-x}=\infin
$$


* $$
\lim_{x\to +\infin}(\ln x-\sqrt x)=\infin-\infin\quad FI \xrightarrow{\ln x=o(\sqrt x)}\lim_{x \to \infin}-\sqrt x=-\infin
$$

> Forme di indecisione dirvese $\frac\infin\infin$ e $\infin- \infin$

---

$$
\lim_{x\to +\infin}\frac{5x^3-4x^2+3}{x^3-1}=\frac{+\infin-\infin}{+\infin}\quad FI \xrightarrow[-1=o(x^{-3})]{-4x^2+3=o(x^3)}\lim_{x \to +\infin}\frac{5\cancel x^3}{\cancel x ^3}=5
$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MjIwNzkyODAsLTE0NjA2MDE3NTgsMT
I3ODUxNzUzNiw2MDAyMjUxODJdfQ==
-->