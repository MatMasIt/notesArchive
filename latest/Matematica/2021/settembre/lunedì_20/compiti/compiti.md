# Compiti di Matematica, Libro $5$
## p. 42
### es. 136
$$
f(m)= km^2-\frac{k^2}{m}\\
D(f(m))=D\left(km^2\right)-D\left(\frac{k^2}{m}\right)\\
=2km-k^2\cdot D\left(\frac{1}{x}\right)\\
=2km-k^2\cdot \frac{D(x)}{x^2}\\
2km+\frac{k^2}{m^2}
$$
### es. 143
$$
f(x)=(3x-2)(5x^2+7)\\
D[(3x−2)(5x^2+7)]=\\
(3\cdot D[x]+D[-2])(5x^2+7)+(3x-2)\left(5\cdot D\left[x^2\right]+D[7]\right)\\
3(5x^2+7)+(3x-2)(5\cdot2x)\\
3(5x^2+7)+10x(3x-2)\\
45x^2-20x+21
$$
### es. 147
$$
f(x)=x^2\ln x\\
D[f(x)]=D[x^2]\ln x+x^2D[\ln x]\\
2x\ln(x)+x^2\frac{1}{x}\\
2x\ln(x)+x\\
x(2\ln(x)+1)
$$
### es. 148
$$
f(x)=e^x\sin(x)\\
D[f(x)]=D[e^x\sin x]\\
=D[e^x]\sin(x)+e^x\cos(x)\\
=e^x\sin(x)+e^x\cos(x)\\
e^x(\sin(x)+\cos(x))
$$
### es. 154
$$
f(x)=\sqrt{2}(1+e^x)\\
D\left[\sqrt{2}(1+e^x)\right]\\
D\left[\sqrt{x}\right]\cdot(e^x+1)+\sqrt{x}\cdot D\left[e^x+1\right]\\
\frac12x^{\frac12-1}(e^x+1)+\sqrt{x}\cdot\left(D[e^x]+D[1]\right)\\
\frac{e^x+1}{2\sqrt{x}}+\sqrt{x}\cdot e^x\\
\frac{(2x+1)e^x+1}{2\sqrt{x}}
$$
### es. 163
$$
f(x)=\frac{1}{2x+3}\\
D[f(x)]=-\frac{D[2x+3]}{(2x+3)^2}\\
-\frac{2\cdot D[x]+D[3]}{(2x+3)^2}\\
-\frac{2}{(2x+3)^2}
$$
### es. 171
$$
f(x)=\frac{x^2+1}{x^2-4}\\
D[f(x)]=\frac{D[x^2+1]\cdot(x^2+4)-(x^2+1)\cdot D[x^2-4]}{(x^2-4)^2}\\
=\frac{\left(D[x^2]+D[1]\right)(x^2-4)-(x^2+1)\left(D[x^2]+D[-4]\right)}{(x^2-4)^2}\\
=\frac{2x(x^2-4)-2x(x^2+1)}{(x^2-4)^2}\\
=\frac{2x[(x^2-4)-(x^2+1)]}{(x^2-4)^2}\\
=\frac{2x(x^2-4-x^2-1)}{(x^2-4)^2}\\
=-\frac{10x}{(x^2-4)^2}
$$
### es. 187
$$
f(x)=\frac{e^x}{\sin x}\\
D[f(x)]=\frac{D[e^x]\cdot \sin(x) - e^x\cdot D[\sin(x)]}{\sin^2(x)}\\
=\frac{e^x\sin(x)-e^x\cos(x)}{\sin^2(x)}\\
=e^x\cdot\frac{\sin(x)-\cos(x)}{\sin^2(x)}
$$
## p.44
### es.207
$$
f(x)=\frac{2x^2+1}{x^3}\\
D(f(x))=D\left(\frac{2x^2+1}{x^3}\right)\\
=\frac{D[2x^2+1]x^3-(2x^2+1)D[x^3]}{(x^3)^2}\\
=\frac{\left(2\cdot D[x^2]+D[1]\right)x^3-(2x^2+1)\cdot3x^2}{x^6}\\
\frac{4x^4-3x^2(2x^2+1)}{x^6}\\
-\frac{2x^2+3}{x^4}
$$
### es.208
$$
f(x)=\frac{3x}{x^2-1}\\
D\left[\frac{3x}{x^2-1}\right]\\
=3\cdot D\left[\frac{3x}{x^2-1}\right]\\
=3\cdot \frac{D(x)\cdot (x^2-1)-x\cdot D[x^2-1]}{(x^2-1)^2}\\
=3\cdot \frac{D(x)\cdot (x^2-1)-x\cdot D[x^2-1]}{(x^2-1)^2}\\
=\frac{3\cdot (x^2-2x^2-1)}{(x^2-1)^2}\\
-\frac{3(x^2+1)}{(x^2-1)^2}
$$
### es.209
$$
f(x)=\frac{x^3+1}{x^3-1}\\
D(f(x))=D\left[\frac{x^3+1}{x^3-1}\right]=\\
\frac{D[x^3+1](x^3-1)-(x^3+1)D\left[x^3-1\right]}{(x^3-1)^2}=\\
\frac{\left(D[x^3]+D[1]\right)(x^3-1)-(x^3+1)\left(D[x^3]+D[-1]\right)}{(x^3-1)^2}=\\
=\frac{3x^2(x^3-1)-3x^2(x^3+1)}{(x^3-1)^2}\\
-\frac{6x^2}{(x^3-1)^2}
$$
### es.210
$$
f(x)=x^2+\sin(x)+e^x\\
D(f(x))=2x+\cos(x)+e^x
$$
### es.211
$$
f(x)=(x-1)(x-2)(x-3)\\
D(f(x))=\\
D[x-3](x-2)(x-1)+(x-3)D[x-2](x-1)+(x-3)(x-2)D[x-1]\\
(D[x]+D[-3])(x-2)(x-1)+(x-3)(D[x]+D[-2])(x-1)+(x-3)(x-2)(D[x]+D[-1])\\
(x-3)(x-1)+(x-3)(x-1)+(x-3)(x-2)\\
3x^2-12x+11
$$
### es.212
$$
f(t)=te^t-\sin(t)\\
D(f(t))=-\cos(t)+te^t+e^T\\
=(t+1)e^t-\cos(t)
$$
### es.213
$$
f(x)=(x-1)^2(x+1)\\
D(f(x))=D[(x-1)^2](x+1)+(x-1)^2D[x+1]\\
2(x-1)D[x-1](x+1)+(x-1)^2(D[x]+D[1])\\
2(x-1)+(x-1)^2
3x^2-2x-1
$$
### es.214
$$
f(x)=\frac{x^2(x^3+1)}{x+4}\\
D(f(x))=\frac{D[x^2(x^3+1)](x+4)-x^2(x^3+1)D[x+4]}{(x+4)^2}\\
=\frac{(D[x^2](x^3+1)+x^2D[x^3+1])(x+4)-x^2(x^3+1)}{(x+4)^2}\\
\frac{(x+4)(3x^4+2x(x^3+1))-x^2(x^3+1)}{(x+4)^2}
$$
### es.215
$$
f(x)=e^x(\sin x-\cos x)\\
D(f(x))=\\
D(e^x)(\sin x-\cos x)+e^xD(\sin(x)-\cos(x))\\
e^x(\sin x -\cos x)+e^x(D[\sin x]-D[\cos x])\\
e^x(\sin x- \cos x) + e^x (\sin x -\cos x)\\
2e^x\sin x
$$
### es.216
$$
f(t)=\sin t+\frac{1}{\cos(t)}\\
D(f(x))=D[\sin t]+D\left[\frac1{\cos(t)}\right]\\
\cos(t)-\frac{D[\cos t]}{\cos^2 t}\\
\cos(t)-\frac{-\sin t}{\cos^2 t}\\
=\cos t+\frac{\sin t}{\cos^2 t}
$$
### es.217
$$
f(x)=\sin x- x\cos x\\
D(f(x))=D[\sin x]-D[x\cos x]\\
=\cos x  - \left(D(x)\cdot \cos x + x\cdot D[\cos x] \right)\\
\cos x- \cos x +\sin (x) x\\
=x\sin x
$$
### es.218
$$
f(x)=\frac{\ln x+1}{x^2}\\
D(f(x))=\frac{D[\ln x +1]x^2-(\ln x+1)D[x^2]}{(x^2)^2}=\\
\frac{\left(D[\ln(x)]+D[1]\right)x^2-(\ln(x)+1)\cdot 2x}{x^4}=\\
\frac{x-2x(\ln x+1)}{x^4}=\\
-\frac{2\ln(x)+1)}{x^3}
$$
### es.219
$$
f(x)=\frac{\sqrt{x}}{\sqrt{x}+2}
D(f(x))\\
\frac{D[\sqrt x](\sqrt x +2)- \sqrt x D[\sqrt x +2]}{(\sqrt x +2)^2}\\
\frac{\frac12x^{\frac12 -1}(\sqrt x+2)-\sqrt x (D[\sqrt x]+D[2])}{(\sqrt{x}+2)^2}=\\
\frac{\frac{\sqrt x +2}{2\sqrt x}-\frac12}{(\sqrt{x}+2)^2}=\\
\frac{1}{(\sqrt x +2)^2\sqrt x}
$$
### es.220
$$
f(x)=\frac12x^2\ln x-\frac14x^2\\
D(f(x))=\\
\frac12D[x^2\ln(x)]-\frac14D[x^2]\\
=\frac{D[x^2]\ln(x)+x^2D[\ln(x)]}{2}-\frac{2x}{4}\\
=\frac{2\ln(x)+x^2\frac1{x}}{2}-\frac{x}2\\
\frac{2x\ln(x)+x}{2}-\frac{x}{2}\\
=x\ln x
$$
### es.221
$$
f(x)=x\tan(x)\\
D(f(x))=\tan(x)+\frac{x}{\cos^2x}
$$
### es.222
$$
f(t)=te^t-\sin t\\
D(f(t))=-\cos(t)+te^t+e^t\\
(t+q)e^t-\cos(t)
$$
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUwODU5NTk1Nl19
-->