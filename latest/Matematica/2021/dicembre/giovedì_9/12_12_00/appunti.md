# Lezione di Matematica

$$
\lim_{x\to \infin}\left(\frac{x^2}{x+1}-\frac{x^3+1}{x^2-1}\right)=\frac{+\infin}{+\infin}-\frac{\infin}{\infin}FI
$$


$$
\cancel{\xrightarrow[1=o(x^2)]{1=o(x)\quad 1=o(x^3)}\lim_{x \to \infin }\left(\frac{x^{\cancel{2}}}{\cancel{x}}-\frac{x^{\cancel 3}}{\cancel{x^2}}\right)=\lim_{x\to \infin}(x-x)}
$$


$$
\lim_{x\to+\infin}\left(\frac{x^2}{x+1}-\frac{\cancel{(x+1)}(x^2-x+1)}{(x-1)\cancel{(x+1)}} \right)
$$

$$
=\lim_{x\to\infin}\frac{x^2(x-1)-(x^3+1)}{(x+1)(x-1)}
$$

$$
=\lim_{x\to\infin}\frac{x^3-x^2-x^3-1}{x^2-1}=-1
$$

### 369
$$
\lim_{x\to+\infin}\frac1{x+\sqrt{x+1}}=\frac1{+\infin+\infin}=\frac1{+\infin}=0^+
$$

### 357

$$
\lim_{x\to+\infin}\left(\sqrt x-\sqrt{x^2+9}\right)=+\infin-\infin\quad FI
$$

$$
\xrightarrow{9=o(x^2)}\lim_{x\to +\infin}\left(\sqrt{x}-\sqrt{x^2}\right)
$$


$$
Osservazione\quad |x|
\\
=x\quad per \quad \lim_{x\to+\infin}\\
=-x\quad per \quad \lim_{\to -\infin}
$$


---

$$
\lim_{x\to-\infin}\left(\sqrt{x^2+x+1}+x\right)=\sqrt{\infin-\infin}-\infin\quad FI
$$

$$
\xrightarrow{x+1=o(x^2)}\lim_{x\to -\infin}\left(\sqrt{x^2}+x\right)=\lim_{x\to -\infin}\left(|x|+x\right)=\lim{x\to-\infin}-x+x \quad FI
$$


$$
\lim_{x\to -\infin}\frac{\left(\sqrt{x^2+x+1}\right)\left(\sqrt{x^2+x+1}-x\right)}{\sqrt{x^2+x+1}-1}
$$

$$
=\lim_{x\to\infin}\frac{\cancel{x^2}+x+1\cancel{-x^2}}{\sqrt{x^2+x+1}-x}
$$

$$
\xrightarrow[x+1=o(x^2)]{1=o(x)}\lim_{x\to -\infin}\frac{x}{\sqrt{x^2}-x}=\lim_{x\to \infin}\frac{x}{|x|-x}
$$

$$
\xrightarrow[|x|=-x\quad x\to -\infin]{}
$$

$$
\lim_{x\to-\infin}\frac{x}{-x-x}=\frac{\cancel x}{-2\cancel x}-\frac12
$$


----


### 339

$$
\lim_{x\to +\infin}\frac{\sqrt{4x^2-1}-\sqrt{x^2-1}}{x}=\frac{+\infin-\infin}{+\infin}\quad FI
$$

$$
\xrightarrow{1=o(x^2)}
$$


$$
\lim_{x\to+\infin}=\frac{\sqrt{4x^2}-\sqrt{x^2}}{x}=\lim_{x\to +\infin}\frac{2|x|-|x|}{x}=\lim_{x\to+\infin}\frac{|x|}{x}
$$

$$
\xrightarrow[|x|=x\quad x\to+\infin]{}
$$

$$
\lim_{x\to+\infin}\frac{\cancel x}{\cancel x}=1
$$


### 342

$$
\lim_{x\to+\infin}\frac{\sqrt{x^2-1}-x}{\sqrt{x^2-1}+x}
$$



### 362

$$
\lim_{x\to 0}\frac{\sqrt{x+2}-\sqrt{2}}{\sqrt{x+4}-2}=\frac{\sqrt{2}-\sqrt{2}}{2-2}=\frac00\quad FI
$$



$$
\lim_{x\to 0}\frac{(\sqrt{x+2}-\sqrt{2})(\sqrt{x+2}+\sqrt{2})(\sqrt{x+4}+2)}{(\sqrt{x+4}-2)(\sqrt{x+2}+\sqrt{2})(\sqrt{x+4}+2)}
$$

$$
\lim_{x\to 0}\frac{(x-\cancel 2+\cancel 2)(\sqrt{x+4}+2)}{(x+\cancel 4-\cancel 4)(\sqrt{x+2}+\sqrt{2})}
$$


$$
=\lim_{x\to 0}\frac{\cancel x (\sqrt{x+4}+2)}{\cancel x(\sqrt{x+2}+\sqrt{2})}=\frac{\cancel 4^2}{\cancel 2 \sqrt2}=\sqrt2
$$

---

### 378 
$$
\lim_{x\to 0}\frac{x}{\sqrt{3-x}-\sqrt{3+x}}=\frac{0}{\sqrt{3}-\sqrt{3}}=\frac00\quad FI
$$

Razionalizzo il denominatore

$$
\lim_{x\to 0}\frac{x\left(\sqrt{3-x}+\sqrt{3+x}\right)}{\cancel 3 -x - \cancel 3 -x}
$$

$$
=\lim_{x\to 0}\frac{\cancel x(\sqrt{3-x}+\sqrt{3+x})}{-2\cancel x}
$$

$$
=\frac{2\sqrt 3}{-2}=-\sqrt 3
$$


---

### 314

$$
\lim_{x\to 1^{+}}\frac{(x-1)^{\frac12}-(x-1)^{\frac23}}{(x-2)^{\frac12}+(x-1)^{\frac23}}=\frac00\quad FI
$$

> $x-1=t$
> $x\to 1 \implies t\to 0$

$$
\lim_{t\to 0^+}\frac{t^\frac12-t^\frac23}{t^\frac12+t^\frac23}
$$

$$
\xrightarrow{t^\frac23=o\left(t^\frac12\right)}\lim_{t\to 0^+}\frac{t^\frac12}{t^\frac12}=1
$$



---


$$
f(x)=f(0)+\frac{f'(0)}{1!}x^1
+\frac{f''(0)}{2!}x^2+\frac{f'''(0)}{3!}x^3...$$

$$
...=o(x^3)
$$


$$
\sin x = x-\frac16x^3+o(x^3)
$$

$$
\cos x = 1-\frac12x^2+o(x^2)
$$

---


$$
D(tanx)=D\left(\frac{\sin x}{\cos x}\right)=\frac{\cos^2 x+\sin^2x}{\cos^2 x}=\frac1{\cos^2 x}=1+\tan^2x
$$

$$
f(x)=\tan x
$$

$$
f'(x)=1+\tan^2x
$$

$$
f''(x)=2\tan x(1+\tan^2x)=2\tan x +2 \tan^3 x
$$

$$
f'''(x)=2(1+\tan^2x)+2\cdot 3\cdot tan^2x(1+\tan^2)x=2+2\tan^2x+6\tan^2x+6\tan^4x
$$


$$
\boxed{
f(0)=0\quad f'(0)=1\quad f''(0)=0\quad f'''(0)=2
}$$


$$
\tan=\frac{1}{1!}x+\frac{2}{3!}x^2+o(x^3)=x+\frac13x^3+o(x^3)
$$

---
$$
\lim_{x\to 0}\frac{\sin x}{x}=1
$$

$$
\lim_{x\to 0}\frac{1-\cos x}{x^2}=\frac12
$$


---




<!--stackedit_data:
eyJoaXN0b3J5IjpbNTQ4MTUzNzIyLDUxMzU1Njc0MSwxNjQxOT
QyNzc2LDEwOTE1MDk0MzFdfQ==
-->