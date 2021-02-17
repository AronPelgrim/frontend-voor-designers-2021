# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

# Project titel
Mijn project heet films liken. Ik heb namelijk voor use case 1 gekozen, 'In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.' 

* [Versie 1](https://aronpelgrim.github.io/frontend-voor-designers-2021/opdracht1/V1/index.html)
* [Versie 2](https://aronpelgrim.github.io/frontend-voor-designers-2021/opdracht1/V2/index.html)

Vergeet niet om het formaat naar telefoon te zetten!

## Interface
In de interface is het mogelijk om films te liken, de films die worden geliked worden bijgehouden. Er wordt een animatie geactiveerd wanneer er een film wordt geliked, of weggehaald uit het lijstje. 

Principe 4: De gebruiker scrolled door de interface en ziet dat de films in een carousel staan. Er wordt een klein stukje van de laatst zichtbare film in de carousel getoond, zodat de gebruiker weet dat er een carousel is en hier doorheen gescrolled kan worden. Dit geeft de gebruiker controle. Ook wordt er duidelijk laten zien welke state de film heeft door een icoontje. De gebruiker kan elke film toevoegen, of verwijderen van de lijst. 

Principe 11: Aan de bovenkant van de pagina wordt duidelijk gemaakt wat de inhoud van de pagina bevat, door middel van een soort banner. Daar direct onder wordt er door een titel laten zien wat soort films er in de carousel staan. Door deze titels worden de carousellen ook duidelijk van elkaar gescheiden.

## Code
Er wordt eerst een variabele aangemaakt met een querySelectorAll voor de wish buttons. Met een for loop wordt elke button langsgegaan met een click event waarbij een functie wordt geactiveerd. In deze functie wordt bepaald welke status de wish button heeft en schakelt de tegenovergestelde status in. Hierbij wordt ook de animatie geactiveerd die bij de status hoort. In de onderste functie wordt de hoofdteller bijgewerkt, door de hoeveelheid van de wishlist op dat moment uit de html span te halen. Vervolgens wordt afhankelijk van de parameter uit de vorige functie, gekeken of er bij de nieuwe teller + 1 of - 1 moet. Vervolgens wordt dat nieuwe getal in de html span gezet.
