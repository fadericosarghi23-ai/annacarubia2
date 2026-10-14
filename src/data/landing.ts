/**
 * Contenuti della landing — Anna Carubia, architetto d'interni.
 *
 * Riempita da CONTENT_FILL.md. La cliente non ha un sito: la mappa copre poco,
 * quindi ogni testo dichiara da dove viene, con un commento accanto:
 *
 *   // MAPPA            testo preso dalla mappa (verbatim o gia' riscritto li')
 *   // INVENTATO: ...   testo scritto da noi, NON fornito dalla cliente: va
 *                       validato con lei prima di pubblicare. Dopo i due punti
 *                       c'e' lo spunto da cui nasce, se c'e'.
 *
 * Elenco completo degli inventati: TESTI-INVENTATI.md (oppure
 * `grep -rn INVENTATO src public`).
 *
 * Quello che resta col marker DA COMPILARE e' un dato che non si inventa
 * (email, P.IVA, social, dominio...): `npm run slot` li elenca.
 */

export const site = {
  // INVENTATO: la mappa lascia il nome "da decidere" (solo nome personale o un
  // marchio). Qui il nome personale con la professione.
  nome: 'Anna Carubia Architetto',
  // Il dominio viene da `site` in astro.config.mjs (su Netlify: la variabile
  // URL, impostata da Netlify a ogni build). Senza slash finale.
  dominio: (import.meta.env.SITE || 'https://dominio-da-compilare.example').replace(/\/$/, ''),
  email: '[[DA COMPILARE: email dello studio]]', // la mappa: nascosta su BNI, da chiedere
  telefono: '+39 339 131 0258', // MAPPA (3391310258, solo formattato)
  telefonoE164: '+393391310258', // MAPPA
  // MAPPA. Da confermare con la cliente se vuole pubblicare l'indirizzo o solo
  // la zona: da qui dipendono anche la mappa Google e il JSON-LD.
  indirizzo: 'Via Piave 18, 24020 Songavazzo (BG)',
  via: 'Via Piave 18', // MAPPA
  citta: 'Songavazzo', // MAPPA
  cap: '24020', // MAPPA
  provincia: 'BG', // MAPPA
  // INVENTATO: la mappa indica solo "zona Bergamo".
  areeServite: ['Provincia di Bergamo', 'Lombardia'],
  social: {
    // la mappa: nessun social sulla scheda BNI, da chiedere
    instagram: '[[DA COMPILARE: URL profilo Instagram]]',
    facebook: '[[DA COMPILARE: URL pagina Facebook]]',
  },
};

/**
 * Dati legali del footer e delle pagine privacy/cookie.
 * La mappa: non disponibili, da chiedere (anche il numero di iscrizione
 * all'Ordine degli Architetti, che oggi non ha uno slot nel footer).
 */
export const legale = {
  ragioneSociale: '[[DA COMPILARE: ragione sociale o dicitura professionale]]',
  piva: '[[DA COMPILARE: partita IVA]]',
  pec: '[[DA COMPILARE: indirizzo PEC]]',
};

/**
 * Navigazione della landing: ancore interne alla stessa pagina.
 * INVENTATO: tutte e cinque le etichette (la mappa non ha un menu). Prima
 * persona singolare, come la bio.
 */
export const navLinks = [
  { label: 'Chi sono', hash: '#mission' },
  { label: 'Metodo', hash: '#metodo' },
  { label: 'Ambiti', hash: '#ambiti' },
  { label: 'Progetti', hash: '#portfolio' },
  { label: 'Contatti', hash: '#contatti' },
];

export const hero = {
  eyebrow: 'Anna Carubia Architetto', // INVENTATO: e' il nome scelto sopra
  // MAPPA (riscritta li', da validare). Sono 8 parole, una sopra la misura
  // dello slot: il titolo va su tre righe invece di due.
  h1: 'Progetto interni su misura, dal disegno al cantiere',
  // INVENTATO: dallo spunto della mappa "architetto d'interni, residenziale e
  // contract, zona Bergamo".
  kicker: 'Architetto d’interni in provincia di Bergamo: case, uffici e spazi contract.',
  ctaLabel: 'Parliamo del tuo progetto', // MAPPA (proposta, da validare)
};

export const mission = {
  label: 'Chi sono', // INVENTATO
  // INVENTATO: riscrittura della bio grezza ("la figura perno tra il disegno e
  // il cantiere"). La mappa propone come claim "Concretizzo idee, con la
  // comunicazione dell'evidenza grafica", ma la segna da riscrivere.
  quote:
    'Sono la figura che tiene insieme il disegno e il cantiere: trasformo un’idea in uno spazio concreto e la seguo fino all’ultimo dettaglio.',
  autore: 'Anna Carubia', // MAPPA (intestazione: "Dott. Anna Carubia")
  ruolo: 'Architetto d’interni', // MAPPA (architetto con specializzazione in progettazione d'interni)
  corpo: [
    // MAPPA: bio riscritta, da validare con la cliente.
    'Architetto con specializzazione in progettazione d’interni, indoor e outdoor. Lavoro su progetti residenziali, uffici e contract, seguendo il cliente dal disegno iniziale fino al cantiere, con direzione e coordinamento dei lavori. Grazie al rilievo con laser scanner realizzo progetti precisi al centimetro, per un approccio che arriva fino alla soluzione chiavi in mano.',
    // INVENTATO: dagli spunti del materiale BNI (giovani coppie e prima casa;
    // il progetto dei 25 mq, cioe' i piccoli spazi; la scuola del "chiavi in
    // mano" fino alla scelta della biancheria).
    'Mi piace in particolare accompagnare le giovani coppie alla prima casa, e lavorare sugli spazi piccoli, dove ogni centimetro conta. Vengo da una scuola in cui il cliente si segue fino all’ultima scelta, dagli arredi ai tessili: è lo stesso modo in cui lavoro oggi.',
  ],
  ctaLabel: 'Chi sono', // INVENTATO
};

/**
 * Le 4 fasi del metodo.
 * INVENTATO: titoli e testi di tutte e quattro. La mappa non descrive un
 * metodo: le fasi sono ricavate dalla bio (rilievo con laser scanner,
 * progetto, coordinamento del cantiere, chiavi in mano).
 * Foto: FOTO STOCK da Unsplash (illustrative, non della cliente), vedi TESTI-INVENTATI.md.
 */
export const fasi = [
  {
    n: '01',
    titolo: 'Rilievo', // INVENTATO
    testo: 'Rilievo dello spazio con laser scanner: misure di alta precisione, al centimetro, come base affidabile per tutto il progetto.', // INVENTATO
    img: 'fase-01.jpg',
    alt: 'Strumento di rilievo topografico su treppiede', // FOTO STOCK Unsplash 1GW45VDkFI0, non della cliente
  },
  {
    n: '02',
    titolo: 'Progetto d’interni', // INVENTATO
    testo: 'Distribuzione degli spazi, arredo su misura, materiali e luci, con viste 3D per vedere il risultato prima di iniziare.', // INVENTATO
    img: 'fase-02.jpg',
    alt: 'Planimetrie architettoniche con matite e righello sul tavolo', // FOTO STOCK Unsplash Yn8D5B8C-eY, non della cliente
  },
  {
    n: '03',
    titolo: 'Esecutivo e scelte', // INVENTATO
    testo: 'Disegni esecutivi, dettagli costruttivi e scelta di finiture, arredi e complementi.', // INVENTATO
    img: 'fase-03.jpg',
    alt: 'Mano che tiene campioni di colore sopra disegni di progetto', // FOTO STOCK Unsplash pdCTX1harH4, non della cliente
  },
  {
    n: '04',
    titolo: 'Cantiere', // INVENTATO
    testo: 'Direzione lavori e coordinamento delle imprese, fino alla consegna chiavi in mano.', // INVENTATO
    img: 'fase-04.jpg',
    alt: 'Stanza in ristrutturazione con puntelli metallici e calcinacci', // FOTO STOCK Unsplash biRt6RXejuk, non della cliente
  },
];

/**
 * Banda scorrevole fra Mission e Metodo.
 * MAPPA: i 7 servizi della mappa, verbatim (la mappa li segna "derivati dalla
 * bio, da validare"). La base ne prevede 5: la banda ne regge 7 senza
 * cambiare nulla, la traccia si duplica da sola.
 */
export const specializzazioni = [
  'Progettazione d’interni residenziale',
  'Progettazione uffici e spazi contract',
  'Arredamento d’interni',
  'Progettazione outdoor',
  'Rilievo con laser scanner ad alta precisione',
  'Direzione lavori e coordinamento del cantiere',
  'Soluzioni chiavi in mano',
];

/**
 * Ambiti = le categorie del portfolio, e i filtri della griglia.
 *
 * INVENTATO: le quattro categorie e i loro testi. La mappa non ha una
 * tassonomia: sono ricavate dai servizi (residenziale, uffici e contract,
 * outdoor) e dallo spunto BNI sui piccoli spazi.
 *
 * Cambiando un `titolo` qui vanno cambiate anche le stringhe in progetti.ts,
 * carattere per carattere, altrimenti il filtro non trova nulla.
 */
export const ambiti = [
  {
    titolo: 'Residenziale', // INVENTATO
    testo: 'Case e appartamenti, dalla prima casa alla ristrutturazione, su misura di chi li abita.', // INVENTATO
    href: '/progetti/#ambito-01',
    img: 'ambito-01.jpg',
    alt: 'Soggiorno con tavolo in legno bianco e sedie', // FOTO STOCK Unsplash 4xRP0Ajk9ys, non della cliente
  },
  {
    titolo: 'Piccoli spazi', // INVENTATO
    testo: 'Monolocali e appartamenti compatti: ogni metro quadro sfruttato, senza rinunciare al comfort.', // INVENTATO
    href: '/progetti/#ambito-02',
    img: 'ambito-02.jpg',
    alt: 'Cucina compatta con tavolo e sedie in un monolocale', // FOTO STOCK Unsplash NoPzk4m4jHc, non della cliente
  },
  {
    titolo: 'Outdoor', // INVENTATO
    testo: 'Terrazzi, giardini e spazi esterni pensati come la naturale prosecuzione della casa.', // INVENTATO
    href: '/progetti/#ambito-03',
    img: 'ambito-03.jpg',
    alt: 'Casa bianca con terrazza sul tetto costruita su un pendio roccioso', // FOTO STOCK Unsplash KYoNhxcurtM, non della cliente
  },
  {
    titolo: 'Uffici e contract', // INVENTATO
    testo: 'Uffici, negozi e spazi contract: ambienti di lavoro funzionali, con un’identità precisa.', // INVENTATO
    href: '/progetti/#ambito-04',
    img: 'ambito-04.jpg',
    alt: 'Spazio di lavoro con divano, poltrona, tavolo e pareti a specchio', // FOTO STOCK Unsplash _ruJH-BVPbo, non della cliente
  },
];

/**
 * 6 progetti in vetrina: le 6 slide del carosello dell'hero, e le prime 4
 * finiscono anche sul binario della landing.
 *
 * INVENTATO: titoli, categorie e localita' di TUTTI i progetti. La mappa dice
 * che non esistono progetti pubblicati: sono progetti tipo, scritti per non
 * lasciare vuoto il carosello, e vanno sostituiti con quelli veri della
 * cliente (titolo, luogo, anno, tipologia, foto HD). Le localita' sono solo la
 * zona di attivita', non luoghi di progetti reali. Foto: FOTO STOCK da Unsplash, non
 * della cliente (vedi TESTI-INVENTATI.md).
 *
 * Attenzione ai due indici, che NON coincidono:
 *  - `img` e' lo slot della vetrina (progetto-01..06.jpg in src/assets/img/);
 *  - `href` punta alla scheda nella griglia, che ha un ordine suo (progetti.ts).
 * `categoria` deve essere uno dei `titolo` di `ambiti`.
 */
export const progetti = [
  {
    titolo: 'Casa su tre livelli', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categoria: 'Residenziale',
    nota: '[[DA COMPILARE: anno]]', // non mostrato a video: non si inventa
    href: '/progetti/progetto-02/',
    img: 'progetto-01.jpg',
    alt: 'Casa moderna su tre livelli con rivestimento in legno e grandi vetrate', // FOTO STOCK Unsplash iDq7J5bAa0I, non della cliente (stessa foto del progetto 02 in griglia)
  },
  {
    titolo: 'Appartamento prima casa', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categoria: 'Residenziale',
    nota: '[[DA COMPILARE: anno]]',
    href: '/progetti/progetto-03/',
    img: 'progetto-02.jpg',
    alt: 'Soggiorno luminoso con divano bianco, cuscini verdi e tavolino basso', // FOTO STOCK Unsplash RuCVvjuyNeQ, non della cliente (stessa foto del progetto 03 in griglia)
  },
  {
    titolo: 'Terrazzo in quota', // INVENTATO
    localita: 'Alta Val Seriana (BG)', // INVENTATO
    categoria: 'Outdoor',
    nota: '[[DA COMPILARE: anno]]',
    href: '/progetti/progetto-01/',
    img: 'progetto-03.jpg',
    alt: 'Terrazza con sedute affacciata su montagne avvolte nella nebbia', // FOTO STOCK Unsplash wKHoG0Xg1SM, non della cliente (stessa foto del progetto 01 in griglia)
  },
  {
    titolo: 'Monolocale 25 mq', // INVENTATO: spunto BNI ("i 25 mq dell'appartamento")
    localita: 'Provincia di Bergamo', // INVENTATO
    categoria: 'Piccoli spazi',
    nota: '[[DA COMPILARE: anno]]',
    href: '/progetti/progetto-08/',
    img: 'progetto-04.jpg',
    alt: 'Monolocale con tavolo, sedie e zona giorno in un unico ambiente', // FOTO STOCK Unsplash hrY-pZqFGyI, non della cliente (stessa foto del progetto 08 in griglia)
  },
  {
    titolo: 'Giardino e portico', // INVENTATO
    localita: 'Alta Val Seriana (BG)', // INVENTATO
    categoria: 'Outdoor',
    nota: '[[DA COMPILARE: anno]]',
    href: '/progetti/progetto-13/',
    img: 'progetto-05.jpg',
    alt: 'Portico con due sedie e un tavolino affacciato sul giardino', // FOTO STOCK Unsplash 5urBxoebDbQ, non della cliente (stessa foto del progetto 13 in griglia)
  },
  {
    titolo: 'Ufficio open space', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categoria: 'Uffici e contract',
    nota: '[[DA COMPILARE: anno]]',
    href: '/progetti/progetto-07/',
    img: 'progetto-06.jpg',
    alt: 'Ufficio open space con postazioni di lavoro e monitor', // FOTO STOCK Unsplash wawEfYdpkag, non della cliente (stessa foto del progetto 07 in griglia)
  },
];

/**
 * Menu del footer. INVENTATO: le tre etichette.
 */
export const footerMenu = [
  { label: 'Progetti', href: '/progetti/' },
  { label: 'Chi sono', href: '/chi-siamo/' },
  { label: 'Contatti', href: '/contatti/' },
];
