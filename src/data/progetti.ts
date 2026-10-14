/**
 * I 16 progetti della griglia del portfolio — Anna Carubia.
 *
 * INVENTATO: titoli, localita' e categorie di TUTTI i 16 progetti. La mappa
 * dice che non esistono progetti pubblicati (ne' testi ne' foto): queste sono
 * voci tipo, scritte perche' griglia e filtro non restino vuoti, e vanno
 * sostituite con i progetti veri della cliente (titolo, luogo, anno,
 * tipologia, serie di foto HD). Le localita' indicano solo la zona di
 * attivita', non luoghi di progetti reali. Le cover sono FOTO
 * STOCK da Unsplash, non della cliente (vedi TESTI-INVENTATI.md).
 *
 * Se la cliente ha meno progetti si cancellano le voci in eccesso E i file
 * immagine corrispondenti (e le righe in scripts/placeholder-slot.json).
 *
 * REGOLA: le stringhe in `categorie` devono combaciare carattere per carattere
 * con quelle di `categorie` in fondo al file (e con i `titolo` di `ambiti` in
 * landing.ts), altrimenti il filtro non trova nulla.
 */
export const progettiTutti = [
  {
    titolo: 'Terrazzo in quota', // INVENTATO
    localita: 'Alta Val Seriana (BG)', // INVENTATO
    categorie: ['Outdoor'],
    href: '/progetti/progetto-01/',
    img: 'progetto-01.jpg',
    alt: 'Terrazza con sedute affacciata su montagne avvolte nella nebbia', // FOTO STOCK Unsplash wKHoG0Xg1SM, non della cliente
  },
  {
    titolo: 'Casa su tre livelli', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categorie: ['Residenziale'],
    href: '/progetti/progetto-02/',
    img: 'progetto-02.jpg',
    alt: 'Casa moderna su tre livelli con rivestimento in legno e grandi vetrate', // FOTO STOCK Unsplash iDq7J5bAa0I, non della cliente
  },
  {
    titolo: 'Appartamento prima casa', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categorie: ['Residenziale'],
    href: '/progetti/progetto-03/',
    img: 'progetto-03.jpg',
    alt: 'Soggiorno luminoso con divano bianco, cuscini verdi e tavolino basso', // FOTO STOCK Unsplash RuCVvjuyNeQ, non della cliente
  },
  {
    titolo: 'Casa di famiglia', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categorie: ['Residenziale'],
    href: '/progetti/progetto-04/',
    img: 'progetto-04.jpg',
    alt: 'Zona pranzo con tavolo bianco rettangolare e sedie in un ambiente aperto', // FOTO STOCK Unsplash jm7HYtcW2VM, non della cliente
  },
  {
    titolo: 'Bilocale con soppalco', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-05/',
    img: 'progetto-05.jpg',
    alt: 'Salotto con soppalco, soffitto alto e grande finestra', // FOTO STOCK Unsplash ac5ksdFJa0U, non della cliente
  },
  {
    titolo: 'Mansarda', // INVENTATO
    localita: 'Alta Val Seriana (BG)', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-06/',
    img: 'progetto-06.jpg',
    alt: 'Camera da letto in mansarda con soffitto inclinato e finestra', // FOTO STOCK Unsplash NhNccu6YZAE, non della cliente
  },
  {
    titolo: 'Ufficio open space', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categorie: ['Uffici e contract'],
    href: '/progetti/progetto-07/',
    img: 'progetto-07.jpg',
    alt: 'Ufficio open space con postazioni di lavoro e monitor', // FOTO STOCK Unsplash wawEfYdpkag, non della cliente
  },
  {
    titolo: 'Monolocale 25 mq', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-08/',
    img: 'progetto-08.jpg',
    alt: 'Monolocale con tavolo, sedie e zona giorno in un unico ambiente', // FOTO STOCK Unsplash hrY-pZqFGyI, non della cliente
  },
  {
    titolo: 'Terrazza panoramica', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categorie: ['Outdoor'],
    href: '/progetti/progetto-09/',
    img: 'progetto-09.jpg',
    alt: 'Terrazza sul tetto con vista sui tetti della città', // FOTO STOCK Unsplash wuhwDJauICs, non della cliente
  },
  {
    titolo: 'Casa in montagna', // INVENTATO
    localita: 'Alta Val Seriana (BG)', // INVENTATO
    categorie: ['Residenziale'],
    href: '/progetti/progetto-10/',
    img: 'progetto-10.jpg',
    alt: 'Interno in legno di una casa di montagna con tavolo e sedie', // FOTO STOCK Unsplash zVwBT5i2SoE, non della cliente
  },
  {
    titolo: 'Cucina in sei metri quadri', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-11/',
    img: 'progetto-11.jpg',
    alt: 'Piccola cucina con sedie in legno e piano di lavoro', // FOTO STOCK Unsplash UXFJ-6Zj27M, non della cliente
  },
  {
    titolo: 'Monolocale per studenti', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-12/',
    img: 'progetto-12.jpg',
    alt: 'Angolo studio con scrivania bianca e monitor in una cameretta', // FOTO STOCK Unsplash v7lqmaD8IEk, non della cliente
  },
  {
    titolo: 'Giardino e portico', // INVENTATO
    localita: 'Alta Val Seriana (BG)', // INVENTATO
    categorie: ['Outdoor'],
    href: '/progetti/progetto-13/',
    img: 'progetto-13.jpg',
    alt: 'Portico con due sedie e un tavolino affacciato sul giardino', // FOTO STOCK Unsplash 5urBxoebDbQ, non della cliente
  },
  {
    titolo: 'Bagno compatto', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-14/',
    img: 'progetto-14.jpg',
    alt: 'Bagno bianco compatto con lavabo a colonna e piante', // FOTO STOCK Unsplash U7PitHRnTNU, non della cliente
  },
  {
    titolo: 'Loft in città', // INVENTATO
    localita: 'Bergamo', // INVENTATO
    categorie: ['Piccoli spazi'],
    href: '/progetti/progetto-15/',
    img: 'progetto-15.jpg',
    alt: 'Loft open space con zona pranzo e cucina', // FOTO STOCK Unsplash tqCfLSHgaIo, non della cliente
  },
  {
    titolo: 'Casa con piscina', // INVENTATO
    localita: 'Provincia di Bergamo', // INVENTATO
    categorie: ['Residenziale'],
    href: '/progetti/progetto-16/',
    img: 'progetto-16.jpg',
    alt: 'Villa moderna bianca con piscina sotto il cielo blu', // FOTO STOCK Unsplash _TPTXZd9mOo, non della cliente
  },
];

/**
 * Le quattro categorie del filtro, nello stesso ordine degli `ambiti`.
 * INVENTATO (vedi ambiti in landing.ts).
 */
export const categorie = ['Residenziale', 'Piccoli spazi', 'Outdoor', 'Uffici e contract'];
