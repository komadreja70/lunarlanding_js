# lunarlanding_js
Projecte lunar landing - tema 2 tasca número 5

> Introducció al javascript. Enllaç de rawgit https://rawgit.com/komadreja70/lunarlanding_js/master/index.html

----
## Tasques prèvies amb les imatges
Hem descarregat les imatges des d'internet i per ajustar tamanys hem utilitzat l'eina web de https://pixelr.com/editor/ 
Hem modificat la  nau i l'hem fet de vell nou amb el programari inkscape d'imatges vectorials

----
## Llista de fitxers pujats a GitHub

Hem creat un repositori dins GitHub que es diu tema2_1 i hem pujat els fitxers següents:

* Carpeta img amb totes les imatges del projecte
* Carpeta css amb el codi d'estils tant per mòbil com per desktop
* Carpeta js amb el fitxer que conté el codi javascript
* index.html página principal
* about.html página secundària de "acerca de"
* comesjuga.html pàgina secundària amb les instruccions
* html validator.pdf resultat del validador html
* d_css_validator.pdf resultat del validador css(desktop)
* m_css_validator.pdf resultat del validador css (mòbil)

----
## Utilització de javascript
Hem utilitzat javascript per controlar la nau.
* velocidad
* altura
* combustible
Son els paràmetres que mostrarem en pantalla i els seus valors varien constantment.
* hayfuel, nivell, pausat són variables d'entorn amb les que controlam si hi ha nivell de combustible, el nivell de dificultad i pausat indica si s'ha pitjat la tecla de pausa.

----
## Creació d'una branca minifier al nostre projecte
Hem creat un branch al github que es diu minifier

----
## Utilització d'eines minifier al nostre projecte
* Hem utilitzat https://www.minifier.org/ per a minificar el codi css i el javascript i l'hem posat a un branch al github que es diu minifier amb els noms d.css i m.css
* Hem utilitzat https://kangax.github.io/html-minifier/ per a minificar el codi html i l'hem posat a un branch al github que es diu minifier amb el nom index.html, comesjugag.html i about.html

----
## Discriminació de pàgina d'estils segons el tipus de pantalla.
* Hem utilitzat la utilitat de media query per tal de discriminar pel tamany de la pantalla si es tracta d'una visualització tipus desktop o bé una tipus mòbil o tablet.
* El codi utilitzat és:
* meta name="viewport" content="width=device-width, initial-scale=1.0"
* link rel='stylesheet' media='screen and (min-width: 961px)' href='css/d.css'
* link rel='stylesheet' media='screen and (max-width: 960px)' href='css/m.css'
* Segons el tipus activarà la página d'estils d.css (desktop) o m.css (mòbil)  
* Al fitxer m.css hem reduit el tamany dels div i el tamany de lletra per a les etiquetes tipus paràgraf i header.

----
## Utilització de tinypng per comprimir i optimitzar les imatges.
* Hem obert una pestanya nova del navegador i hem entrat a https://tinypng.com/
* Hem deixat caure els fitxers d'imatges que teníem preparats

----
## Utilització de tinypng per comprimir i optimitzar les imatges.

* Hem obert una pestanya nova del navegador i hem entrat a https://tinypng.com/
* Hem deixat caure els fitxers d'imatges que teníem preparats
* El programa ha fet l'optimització de les imatges
* Ens mostra el resultat que s'adjunta al fitxer tinyweb_resultat.jpg i que ens mostra si s'han pogut comprimir les imatges en un %
* Descarreguem les imatges comprimides i les adjuntam al nostre repositori al directori /img

----
## Ús de Rawgit per veure html de GitHub
* Hem editat el fitxer *index.html*,  hem copiat l'enllaç de la url
* Hem obert una pestanya nova del navegador i hem entrat a https://rawgit.com/
* Hem enganxat l'enllacç allà on diu "paste a GitHub file or GIST url here"
* A la part de la dreta de la pantalla premem on diu "Use this URL for development"
* copiam la url de "Use this URL for development" i l'enganxam a una altra finestra del navegador
* Veim el resultat amb els títols i la llista i els enllaços en format web.

L'adreça de rawgit és.

     https://rawgit.com/komadreja70/lunarlanding_js/master/index.html


----
## Validació del codi html.
Hem validat el document index.html amb l'eina web de  http://validator.w3.org
Triam l'opció de validate by direct input i enganxam el codi de la nostra tasca index.html.
El resultat és el que s'adjunta al fitxer validator_w3_org.pdf

----
## changelog
* 12-gen-2018

----
## Bibiliografia
* Imatges descarregades de lliure distribució del projecte apollo. https://www.flickr.com/photos/projectapolloarchive/
* https://tinypng.com/
* https://pixlr.com/editor/
* https://www.markdowntutorial.com/
* https://www.minifier.org/ per minifier de css
* http://kangax.github.io/html-minifier/ per minifier de html
* https://www.w3schools.com/js/default.asp per tutorial de javascript
* http://jigsaw.w3.org/css-validator/ validació de css

