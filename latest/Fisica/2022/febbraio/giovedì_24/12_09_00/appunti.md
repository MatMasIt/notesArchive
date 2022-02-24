# Lezione di Fisica


## Il _flusso_ nel campo ==magnetico==

![](https://i.imgur.com/jCGaSL3.jpg)

Circonferenze concentriche: linee di campo


Campo ortogonale al raggio e complanare


$$
\Phi\left(\vec B\right)=\vec B \cdot \vec n S
$$


**Il flusso del campo magnetico in quansiasi punto del cilindro (nella superficie laterale)**

Sia in 

 - [x] Caso 1
 - [x] Caso 2


Il flusso del campo magnetico in una superficie chiusa è sempre 0 in una superficie chiusa



> Quindi abbiamo dedotto in queste lezioni
>*  _Flusso nel campo elettrico_
> $$
> \Phi\left(\vec E\right)=\frac{Q}{\varepsilon}
> $$ (teorema di Gauss)
> * _Flusso nel campo magnetico_
> $$
> \Phi\left(\vec B\right)=0
> $$

## _Circuitazione_ del campo ==elettrico==

$$
\Gamma\left(\vec E\right)=\vec E\cdot \vec{\Delta s}
$$

p. 226 del libro

---

Prendiamo un condensatore, ma vale per qualunque campo e per qualunque linea

![](https://i.imgur.com/uSZPwN4.jpg)

$$
\Gamma\left(\vec E\right)=\Gamma_{AB}\left(\vec E\right)+\Gamma_{BC}\left(\vec E\right)+\Gamma_{CD}\left(\vec E\right)+\Gamma_{DA}\left(\vec E\right)
$$

$$
=E\cdot AB+0+-E\cdot AB+0=\boxed 0
$$


$$
\Gamma\left(\vec E\right)=E\cdot \Delta s=
$$


$$
\Gamma\left(\vec E\right)=\sum_{i}^n\vec E\cdot\vec{\Delta s_i}
$$


$$
a\Gamma\left(\vec E\right)=\sum q\cdot \vec E\cdot \vec{\Delta s}=
$$

$$
\sum\vec{F_I}\cdot \vec{\Delta s}=W=q\cdot \Delta V=0
$$


$$
q\Delta V = 0\xrightarrow{q\neq 0}\Delta V = 0 
$$


$$
\Gamma\left(\vec E\right)=\Delta V
$$


---

## _Circuitazione_ del campo ==magnetico==

![](https://i.imgur.com/jPTmeQr.jpg)

$$
\Gamma\left(\vec B\right)=\vec B\cdot \vec{\Delta s}
$$

Lege di Bjot-Savart


$$
\vec B =\frac{\mu_0}{2\pi}\frac{I}r
$$

$$
\Gamma\left(\vec B\right)=\sum^n_{i=1}\vec B\cdot \vec{\Delta s_{i}}
$$


Tratti piccolissimi quindi $\vec \Delta s$ ha la stessa direzione di $\vec B$, quindi $\alpha = 0°$ e allora $\cos \alpha = 1$

$$
=\sum^n_{i=1}\vec B\cdot \vec{\Delta s_{i}}\cancel{\cos 0}
$$

$$
=\vec B\cdot\sum^n_{i=1} \vec{\Delta s_{i}}
$$

$$
\Gamma\left(\vec B\right)=\vec B\cdot2\pi r
$$

$$
\Gamma\left(\vec B\right)=\frac{\mu_0}{\cancel{2\pi}}\frac{I}{\cancel r}\cdot \cancel{2\pi}=\mu_0I
$$

corrente concatenata ad una linea

$$
\Gamma\left(\vec B\right)=\frac{\mu_0}{\cancel{2\pi}}\frac{I}{\cancel r}\cdot \cancel{2\pi}=\mu_0\sum_i^nI_i
$$

![](https://i.imgur.com/pCO5tvF.jpg)

> Riassumendo
> $\Phi(\vec E)=\frac{\sum Q}{\varepsilon_0}$
> $\Gamma(\vec B)=\mu_0\sum I$
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNjUwNTg0MTMsMjI4MzQ3OTQ0LDUzNj
MzMzIzMywtNzc4NjM5NDc1XX0=
-->