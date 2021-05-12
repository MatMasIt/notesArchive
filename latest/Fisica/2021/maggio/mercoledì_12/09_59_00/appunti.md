# Lezione di Fisica (3° ora)

## mercoledì 12 maggio 2021, 10:00:00
## In collegamento con la Normale, Entropia

### Presentazione della normale

Sede costruita dal Vasari su commissione dei Medici

Selezione rigorosa, solo circa il 5% di chi partecipa è ammesso

Vita collegiale, condivisione di tempi e spazi

Aree disciplinari
* Lettere e Filosofia
* Scienze
* Scienze politico-sociali

Ricerca di base e ricerca applicata

Corsi ordinari:
Laurea Triennale, Laura Magistrale

PhD (dottorato)


Corso di ammissione con posti molto limitati

Corsi di Orientamento Universitario

### Introduzione all'entropia e all'informazione

3 costanti fondamentali, 3 assi
|Simboli|Nome|Scienziati|Fisica|
|---------|-------|-----------|----|
|$G$|Costante di Newton|Newton e Maxwell|Termodinamica|
|$h$|costante di Planck|Planck|Meccanica quantistica|
|$\frac{1}{c}$|1 su velocità della luce|-|Relatività speciale|

# Termodinamica classica


Sadi Carnot 1796-1832
## Il calore


$\Delta S_{f_{in}}-\Delta_{in}=0$

Si riconosce che i calore $(Q)$ è una forma di energia
$U(p,V,T)=$  energia interna del sistema, funzione di stato

  $\Delta U=L+Q$
  
  *una sorgente ha una capacità termica infinita*
## Con una restrizione

"sorgenti" a temperatura $T_{1}T_{2}, T_{1}\ll T_{2}$


Calore fornise solo da temperatura maggiore a temperatura maggiore

si può inverite il processo ma solo con del $Lavoro$

ma 
$\frac{L}{Q} \ll 1-\frac{T_{1}}{T_{2}}$

à Entropia e termica classica

Rudolf Clasius 1822-1888

## Esiste un'alttra funzione di stato: l'Entropia

il un sistema isolato non diminuisce mai

$Entropia\rightarrow S(p,V,T)$


L'entropia di un sistema $S_{1}$ non isolato può diminuire purchè sia compensata dall'aumentodi entropia di un altro sistema $S_{2}$ collegato

$\Delta S=\Delta S_{1}+\Delta S_{2} \geq 0$

* Per una sorgente che assorbe una quantità di calore $Q$
$\Delta S=\frac{Q}{T}$
* Per  una sorgente che cede calore
$\Delta S=-\frac{Q}{T}$


		Il calore va dal caldo verso il freddo a causa dell'entropia

# Teoria cinetica dei gas perfetti

$pV=nRT$ equazione di stato

Per un gas che si espande nel vuoto:
$\Delta S= nR\log\frac{V_{2}}{V_{1}}$

## Gli urti delle molecole contro le pareti
$p=\frac{2}{3}\frac{N}{V}E_{cin}$

$R=\frac{N}{n}k=N_{A}k$

## L'energia cinetica media è proporzionale a T
James Clerk Maxwell, 1831-1879
$E_{cin}=\frac{3}{2}kT$
$k$: costante di Boltzmann

Numero di molecole per intervallo di velocità: forma caratteristica e universale

Distribuzione nota per cui si può calcolare una energia cinetica media, che cresce con la temperatura

La teoria cinetica dei gas da ragione della legge empirica di Boyle

# L'entropia decondo Boltzmann
Ludwig Boltzmann 1844-1906

> Se un gas (un sistema) è fatto di atomi/molecole come può l'entropia crescere sempre se il mondo degli atomi NON conosce la fraccia del tempo?

Moti atomo
* $A\rightarrow B$
* $A\leftarrow B$

Se $A\rightarrow B$ è consentita, lo è anche $A\leftarrow B$

$F=ma$
$a=\frac{v}{t} =\frac{x}{t^2}$

Risposta alla domanda

# L'informazione

## Albergo 1 (A1)

|Stanza 1|Stanza 2|
|-----------|------|
|Sig. Bianchi||Sig. Neri|

## Albergo 2 (A2)
|Stanza 1|Stanza 2|Stanza 3|Stanza 4|
|-----------|------|----|----|
|Sig. Bianchi||Sig. Neri|Sig. Rossi|Sig. Verdi|


Disposizioni possibili

$$
W(A_{1})=2\\
W(A_{2})=4\cdot 3=12\\
W(A_{1} UA_{2})=2\cdot 12=24
$$

Probabilità è l'inverso


Claude Shannon 1948
JhonVon Neumann 1932

L'entropia è una misura delll'informazione mancante (dell'incertezza)
$$
p(W(A_{1}))=\frac12\\
p(W(A_{2}))=\frac{1}{4\cdot 3}=\frac{1}{12}\\
p(W(A_{1} UA_{2}))=\frac{1}{2\cdot 12}=\frac{1}{24}
$$

---

$$
S(A_{1})=k_{s}\log2\\
S(A_{2})=k_{s}\log12\\
S(A_{1}UA_{2})=k_{s}\log24\\
$$

Perchè il logaritmo?

$S(A_{1}U A_{2})=k_{s}(\log2+\log 12)=S(A_{1})+S(A_{2})$
proprietà dei logaritmi

# Generalizzazione

Cosa cambia se Bianchi ha una propensione $p_{1}\neq \frac12$ ad andare nella camera $1$?
$S=-k_{s}[p_{1}\log p_{1}+p_{2}\log p_{2}]=-k_{s}[p_{1}\log p_{1}+ (1-p_{1})\log (1-p_{1})]$

Entropia di Shannon

* SeBbianchi sta in 2 per certo $S=0$
* Se Bianchi sta in 1 per certo $S=0$

Nel caso di incertezza massima (ovvero $p_{1}=\frac12$) $S=1$

Cambio della base della logaritmo

$K_{s}=1, \log \rightarrow \log_{2}$

$S=1 \rightarrow 1 bit$ 


# Intuizione di Boltzmann (1877)
*In un sistema isolato l'informazione mancante può solo crescere (l'informazione non può aumentare)*

Per un gas $N$ è simile a $N_{A}$

In termodinamica non si seguono gli atoi individuali, ma solo $V,N$, la configurazione macroscopica

## Spiegazione di Boltzmann
Il gas si espande perchè il numero delle disposizioni possibili degli $N$ atomi (le configurazioni macroscopiche) cresce con $V$ moltoo rapidamente (da $V_{1} a V_{2}$) , rendendo altamente improanile il ovimento inverso con un $t \gg t_{U}$


> Se $V_{0}$ è lo spazio minimo occupabile da uan delle $N$molecole di un gas di volume $V$, quante sono le disposizioni possibili delle molecole?

$Q=(\frac{V}{V_{0}})(\frac{V}{V_{0}}-1)=(\frac{V}{V_{0}})^N$

$p=\frac{1}{W}=(\frac{V_{0}}{V})^N$

$S(V)=k\log(\frac{V}{V_{0}})^N=kN\log(\frac{V}{V_{0}})$

> Quindi la variazione di entropia +
> $\Delta(V_{1}\rightarrow V_{2})=kN\log \frac{V_{2}}{V_{0}}-kN\log\frac{V_{1}}{V_{0}}=kN\log{V_{2}}{V_{1}}$


Dalla termodinamica classica, $\Delta S= nR\log\frac{V_{2}}{V_{1}}$


# Entropia e vita sulla terra

La **luce del sole** $(\gamma_{S})\rightarrow$ riserve di bassa entropia + calore irraggiato $(\gamma_{CI})$+

$E=hv\rightarrow {\gamma CI} \gg n_{\gamma$
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIwNjI4NjgzM119
-->