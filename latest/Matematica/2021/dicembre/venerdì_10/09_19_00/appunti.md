# Lezione di Matematica (2° ora)
## Venerdì 10 dicembre 2021, 09:19:00



$$
\lim_{x\to\frac\pi2}\frac{1-\sin x}{\cos x}=\frac{1-\sin\frac\pi2}{\cos\frac\pi2}=\frac{1-1}0\quad FI
$$

$$
x=t+\frac\pi2
$$

$$
\lim_{t\to 0}\frac{1-\sin\left(t+\frac\pi2\right)}{\cos\left(t+\frac\pi2\right)}=\lim_{t\to 0}\frac{1-\cos t}{-\sin t}=\lim_{t\to 0}\frac{-\frac12t^{\cancel 2}}{\cancel t}=0
$$

Uso sviluppo asintotico


$$
\cos x \approx 1-\frac12x^3
$$

à#à 489 

$$
\lim_{x\to \frac\pi{6} }\frac{2\sin x-1}{2\cos x-\sqrt 3}=\frac00\quad FI
$$

$$
x-\frac\pi6=t\quad x=t+\frac\pi6
$$

$$
\lim_{t\to 0}\frac{2\sin\left(t-\frac\pi6\right)-1}{2\cdot\left(t+\frac\pi6\right)-\sqrt 3}
$$


$$
=\lim_{t\to0}\frac{2\left[\sin t\cos\frac\pi6+\cos t \cdot \sin \frac\pi6 \right]-1}{2\left[\cos t \cos \frac\pi6-\sin t+\sin \frac\pi6\right]-\sqrt 3}
$$


$$
\lim_{t\to 0}\frac{\cancel{2}\frac{\sqrt 3}{\cancel 2]}\sin t+\cos t-1}{\sqrt 3 \cos t-\sin t - \sqrt 3}
$$

$$
\xrightarrow[\cos t\approx 1-\frac12t^2]{\sin t \approx t}
$$


$$
\lim_{t\to 0}\frac{\sqrt 3 t+\cancel 1-\frac12- \cancel 1}{\sqrt 3\left(1-\frac12t^2\right)-t\sqrt 3}
$$

$$
\lim_{x\to 0}\frac{\sqrt 3 t-\frac12t^2}{-\frac{\sqrt{3}}2t^2-t}
$$


$$
\xrightarrow[t^2=o(t)]{}\frac{\sqrt 3\cancel t*{-\cancel t}=-\sqrt 3}
$$

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEzNzU4NDAzXX0=
-->