# Färgsorteringsspelet

Ett enkelt webbaserat spel där spelaren ska klicka på en färgcirkel och sedan placera färgen i rätt färgbox. Spelet tränar på DOM-manipulation, arrayer, eventhantering och spellogik.

## Syfte med uppgiften

-   Träna på att arbeta med arrayer i JavaScript
-   Förstå DOM-manipulation (visa/dölja element)
-   Använda klickhändelser (`onclick`)
-   Hantera logik för rätt/fel val
-   Uppdatera poäng i realtid
-   Visa en slutskärm när alla färger är sorterade

## Demo (GitHub Pages)

[Öppna spelet här](DEMO-LÄNK-HÄR)

## Instruktioner -- Så spelar du

1.  Klicka på en färgcirkel (t.ex. röd).
2.  Färgen du valt sparas.
3.  Klicka på den box som matchar färgen.
4.  Vid rätt val:
    -   cirkeln försvinner
    -   färgen tas bort från arrayen
    -   poängen ökar
5.  Vid fel val:
    -   poängen minskar
6.  När alla färger är sorterade visas slutskärmen.

## Funktioner

### `start()`

Startar spelet genom att koppla event listeners, nollställa poängen och förbereda listan med färger.

### `updateScore()`

Uppdaterar poängen visuellt i DOM med `textContent`.



### Klickfunktioner för färgcirklar

Exempel: `cRed.onclick`, `cYellow.onclick`, `cBlue.onclick`. Sparar den valda färgen i `selectedColor`.

### Klickfunktioner för färgboxar

Exempel: `bRed.onclick`, `bYellow.onclick`, `bBlue.onclick`.

Logik: - Om vald färg matchar boxen: - färgen tas bort från listan med
`splice()` - färgcirkeln döljs med `style.display = "none"` - poängen
ökar - Annars minskar poängen.

### `endGame()`

Körs när arrayen med färger är tom och visar slutskärmen.

## Källor

-   MDN DOM manipulation:
    https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
-   MDN Array.splice():
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
-   MDN onclick event:
    https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
-   MDN CSS display:
    https://developer.mozilla.org/en-US/docs/Web/CSS/display
