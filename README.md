# Anna Carubia Architetto — sito

Sito di Anna Carubia, architetto d'interni (Songavazzo, BG). Nasce dalla base
`base-architettura-pidatella-4`: struttura, design system e animazioni vengono
da lì e non sono stati toccati. I contenuti sono mappati in
[CONTENT_FILL.md](CONTENT_FILL.md).

**Stato: non pubblicabile così com'è.** La cliente non ha un sito e la mappa
copre poco: molti testi sono stati scritti da noi e sono elencati in
[TESTI-INVENTATI.md](TESTI-INVENTATI.md), da validare con lei. Foto (oggi stock Unsplash, segnate), palette,
dati legali, email e social mancano ancora (`npm run slot`).

```bash
npm install
npm run dev        # http://localhost:4625
```

## Sezioni

Hero con carosello (6 progetti) · Studio (citazione + scheda bio con ritratto) ·
banda scorrevole dei servizi · Metodo in 4 fasi (binario orizzontale) · Ambiti
(4 categorie, binario orizzontale) · Portfolio (binario in landing, griglia con
filtro nella scheda) · Contatti con mappa e form.

Ogni voce della navbar apre la sezione come "scheda" a tutta pagina senza
ricaricare; il logo riporta alla landing.

## Riempire la base

```bash
npm run slot             # elenco completo degli slot, con file e riga
npm run slot -- --conta  # solo i totali
```

La guida passo passo è in [COME-USARE-LA-BASE.md](COME-USARE-LA-BASE.md).

## Comandi

| Comando | Cosa fa |
|---|---|
| `npm run dev` | dev server sulla 4625 |
| `npm run build` | build di produzione in `dist/` |
| `npm run preview` | serve la build sulla 4626 |
| `npm run slot` | elenca gli slot ancora aperti |
| `npm run check` | `astro check` + build + controllo link |
| `npm run smoke` | controlli su Chrome vero (serve `npm run preview` attivo) |
| `npm run placeholder` | rigenera i placeholder immagine da `scripts/placeholder-slot.json` |

## Deploy

`netlify.toml` è pronto (build + check link, `NODE_VERSION = "22"`: Astro 7
richiede Node >= 22.12). Il redirect apex → www è commentato finché non c'è il
dominio. Il `package-lock.json` resta fuori dal repo (`.gitignore`): npm non
installa in modo affidabile i binari per-piattaforma quando il lock è stato
generato su Windows (npm/cli#4828).
