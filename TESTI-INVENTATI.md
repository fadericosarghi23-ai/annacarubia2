# Testi inventati — da validare con la cliente

La cliente non ha un sito e la mappa (`CONTENT_FILL.md`) copre poco. Dove la
mappa non dava un testo, l'abbiamo scritto noi. **Nulla di questo elenco viene
dalla cliente**: va letto con lei e confermato o corretto prima di pubblicare.

Nel codice ogni testo inventato ha accanto il commento `INVENTATO` (in `.ts`
come `// INVENTATO`, nei componenti come `{/* INVENTATO */}`). Per ritrovarli:

```bash
grep -rn INVENTATO src
```

I testi presi dalla mappa sono invece marcati `// MAPPA`. Le foto stock sono
marcate `// FOTO STOCK` accanto al loro `alt` (vedi la sezione **Foto** in fondo).

---

## Identità

| Testo | Dove | Spunto |
|---|---|---|
| Nome «Anna Carubia Architetto» (navbar, footer, JSON-LD, Open Graph, occhiello hero) | `src/data/landing.ts` → `site.nome`, `hero.eyebrow` | la mappa lo lascia «da decidere» (nome personale o marchio) |
| Aree servite «Provincia di Bergamo», «Lombardia» | `landing.ts` → `site.areeServite` (solo JSON-LD) | la mappa dice «zona Bergamo» |
| Meta title «Anna Carubia Architetto \| Interior design a Bergamo» e meta description | `src/pages/index.astro` | — |
| Nome, nome breve e descrizione del manifest | `public/site.webmanifest` (il JSON non ammette commenti) | — |

## Hero

| Testo | Spunto |
|---|---|
| Sottotitolo «Architetto d'interni in provincia di Bergamo: case, uffici e spazi contract.» | sintesi suggerita dalla mappa |

Titolo e CTA vengono dalla mappa (già riscritti lì, da validare).

## Chi sono

| Testo | Spunto |
|---|---|
| Citazione «Sono la figura che tiene insieme il disegno e il cantiere…» | bio grezza: «la figura perno tra il disegno e il cantiere» |
| Secondo paragrafo della bio (giovani coppie e prima casa, piccoli spazi, il cliente seguito fino ai tessili) | materiale BNI: referenza ideale, l'appartamento di 25 mq, la «scuola» del chiavi in mano |
| Occhiello «Chi sono», CTA «Conosci il mio lavoro» e «Chi sono» | — |

Primo paragrafo della bio, nome e ruolo: dalla mappa.

## Metodo (tutta la sezione)

Le quattro fasi **Rilievo**, **Progetto d'interni**, **Esecutivo e scelte**,
**Cantiere** con i loro testi, più occhiello «Metodo», titolo «Come lavoro»,
introduzione e CTA «Vedi il metodo» / «Il mio approccio». Ricavate dalla bio
(laser scanner, progettazione, coordinamento del cantiere, chiavi in mano):
la cliente non ha mai descritto un metodo.

## Ambiti (tutta la sezione)

Le quattro categorie **Residenziale**, **Piccoli spazi**, **Outdoor**,
**Uffici e contract** con i loro testi, più titolo «Ambiti di progetto»,
sottotitolo e CTA. Ricavate dai servizi della mappa e dallo spunto BNI sui
piccoli spazi. Sono anche i **filtri del portfolio**: se cambiano, vanno
cambiate in `landing.ts` e `progetti.ts` carattere per carattere.

## Progetti (tutti)

**I 22 progetti a video sono inventati**, cioè i 6 della vetrina (carosello
dell'hero) e i 16 della griglia: titoli, località e categorie. La mappa dice
che non esiste nessun progetto pubblicato. Sono voci tipo («Appartamento prima
casa», «Monolocale 25 mq», «Ufficio open space»…), scritte perché il
carosello e la griglia non restino vuoti. Le località indicano solo la zona
di attività (Bergamo, provincia, Alta Val Seriana) e non luoghi di progetti
reali. **Vanno sostituiti tutti** con i progetti veri della cliente.

Più occhiello «Portfolio», titolo «Progetti» e le CTA della sezione.

## Contatti e footer

Titolo «Contatti», invito «Una casa da ripensare, un ufficio da progettare:
raccontami la tua idea.», CTA «Scrivimi» / «Vai ai contatti», occhiello
«Recapiti», titolo del form «Raccontami il progetto», nota «Ti rispondo io,
direttamente.», occhiello mappa «Dove sono», bottone navbar «Contattami» (scelto dal committente),
descrizione del footer, titoli delle colonne «Naviga» / «Contatti» /
«Social», voci del menu footer e le 5 voci della navbar.

---

## Cosa NON è stato inventato (e resta aperto)

Questi dati non si inventano, perché un valore finto finirebbe online come se
fosse vero. Restano `[[DA COMPILARE]]` e `npm run slot` li elenca:

- email da pubblicare, URL di Instagram e Facebook;
- ragione sociale o dicitura professionale, P.IVA, PEC, numero di iscrizione
  all'Ordine (quest'ultimo oggi non ha uno slot nel footer);
- dominio (4 punti), endpoint del form;
- anno dei 6 progetti in vetrina (campo `nota`, non mostrato a video);
- palette: la mappa la segna «DA FORNIRE» e vieta valori inventati, quindi
  restano i colori della base;
- **ritratto**: resta il placeholder con la misura scritta sopra. Non si mette il volto di
  un'altra persona al posto della cliente: serve il suo ritratto professionale
  (`src/assets/img/ritratto-fondatore.jpg`, 2304×3456). Uguale nel sito 2.
- logo e favicon: vedi sotto, «Logo e favicon».


## Logo e favicon: dalla scheda BNI, DA CONFERMARE

Per la presentazione logo e favicon usano il riquadro con la «A» della scheda BNI (link della
mappa, raster 400×400, scaricato il 2026-10-14; originale in `brand-originali/logo-bni-400.jpg`).
**Uguali nei due siti** (`anna-carubia/` e `anna-carubia-2/`).

- Il logo è la versione «a stampo» (`brand-originali/logo-bni-stampo.png`): riquadro grigio con
  la «A» trasparente. Su fondo chiaro è identico all'originale; dove il sito lo inverte in bianco
  (sopra l'hero, nel footer) resta leggibile come riquadro bianco con la «A» ritagliata.
- Messo a sinistra in uno slot trasparente con le misure dello slot del logo, così l'header non
  cambia altezza.
- Va **confermato con la cliente** che sia davvero il suo logo e non un'immagine BNI; poi serve la
  versione vettoriale SVG (la mappa la chiede) per sostituire questi file.
- **Animazione d’apertura** col logo (aggiunta su richiesta): la «A» bianca si disegna, compare il nome,
  poi si apre il sito (~2 s). Una volta per sessione, niente con «riduci animazioni». File: `#intro` in `src/layouts/BaseLayout.astro` + `src/styles/global.css` (le ante originali partono dopo il logo, l’ingresso dell’hero è spostato di 1.35 s); segno in `public/img/logo-segno.png`.

---

## Foto

**Tutte le foto del sito sono FOTO STOCK da Unsplash, non lavori della
cliente.** Servono solo a far vedere il sito com'è con immagini vere. Per un
sito di interior design il portfolio è il contenuto principale: **vanno
sostituite tutte** con le foto HD dei progetti della cliente, tenendo nome
file e misura (vedi `COME-USARE-LA-BASE.md`, sezione immagini).

Licenza Unsplash: uso commerciale gratuito, attribuzione non obbligatoria. Le
24 foto sono ritagliate alla misura esatta dello slot che occupano
(cartella `src/assets/img/`, più `public/og-default.jpg`). Anche gli `alt`
descrivono la foto stock e vanno riscritti insieme alle foto.

| File | Usata per | Fonte |
|---|---|---|
| `progetti/progetto-01.jpg + vetrina progetto-03.jpg` | Terrazzo in quota | https://unsplash.com/photos/wKHoG0Xg1SM |
| `progetti/progetto-02.jpg + vetrina progetto-01.jpg + og-default.jpg` | Casa su tre livelli | https://unsplash.com/photos/iDq7J5bAa0I |
| `progetti/progetto-03.jpg + vetrina progetto-02.jpg` | Appartamento prima casa | https://unsplash.com/photos/RuCVvjuyNeQ |
| `progetti/progetto-04.jpg` | Casa di famiglia | https://unsplash.com/photos/jm7HYtcW2VM |
| `progetti/progetto-05.jpg` | Bilocale con soppalco | https://unsplash.com/photos/ac5ksdFJa0U |
| `progetti/progetto-06.jpg` | Mansarda | https://unsplash.com/photos/NhNccu6YZAE |
| `progetti/progetto-07.jpg + vetrina progetto-06.jpg` | Ufficio open space | https://unsplash.com/photos/wawEfYdpkag |
| `progetti/progetto-08.jpg + vetrina progetto-04.jpg` | Monolocale 25 mq | https://unsplash.com/photos/hrY-pZqFGyI |
| `progetti/progetto-09.jpg` | Terrazza panoramica | https://unsplash.com/photos/wuhwDJauICs |
| `progetti/progetto-10.jpg` | Casa in montagna | https://unsplash.com/photos/zVwBT5i2SoE |
| `progetti/progetto-11.jpg` | Cucina in sei metri quadri | https://unsplash.com/photos/UXFJ-6Zj27M |
| `progetti/progetto-12.jpg` | Monolocale per studenti | https://unsplash.com/photos/v7lqmaD8IEk |
| `progetti/progetto-13.jpg + vetrina progetto-05.jpg` | Giardino e portico | https://unsplash.com/photos/5urBxoebDbQ |
| `progetti/progetto-14.jpg` | Bagno compatto | https://unsplash.com/photos/U7PitHRnTNU |
| `progetti/progetto-15.jpg` | Loft in città | https://unsplash.com/photos/tqCfLSHgaIo |
| `progetti/progetto-16.jpg` | Casa con piscina | https://unsplash.com/photos/_TPTXZd9mOo |
| `fase-01.jpg` | Metodo: Rilievo | https://unsplash.com/photos/1GW45VDkFI0 |
| `fase-02.jpg (anche sfondo della sezione)` | Metodo: Progetto d'interni | https://unsplash.com/photos/Yn8D5B8C-eY |
| `fase-03.jpg` | Metodo: Esecutivo e scelte | https://unsplash.com/photos/pdCTX1harH4 |
| `fase-04.jpg` | Metodo: Cantiere | https://unsplash.com/photos/biRt6RXejuk |
| `ambito-01.jpg` | Ambito: Residenziale | https://unsplash.com/photos/4xRP0Ajk9ys |
| `ambito-02.jpg` | Ambito: Piccoli spazi | https://unsplash.com/photos/NoPzk4m4jHc |
| `ambito-03.jpg` | Ambito: Outdoor | https://unsplash.com/photos/KYoNhxcurtM |
| `ambito-04.jpg` | Ambito: Uffici e contract | https://unsplash.com/photos/_ruJH-BVPbo |
