export interface Artwork {
  id: number;
  name: string;
  artist: string;
  country: string;
  date: string;
  image: string;
  description: string;
}

export const arts: Artwork[] = [
  {
    id: 1,
    name: "The Water Lily Pond",
    artist: "Claude Monet",
    country: "France",
    date: "1899",
    image: "https://images.metmuseum.org/CRDImages/dp/web-large/DP889132.jpg",
    description:
      "A masterpiece of Impressionism showing Monet's water garden at Giverny",
  },
  {
    id: 2,
    name: "6 of Nooses, from The Cloisters Playing Cards",
    artist: "Unknown",
    country: "South Netherlandish",
    date: "ca. 1475-80",
    image: "https://images.metmuseum.org/CRDImages/cl/original/DP354549.jpg",
    description: `The Cloisters set of fifty-two cards constitutes the only known complete deck of illuminated ordinary playing cards (as opposed to tarot cards) from the fifteenth century. There are four suits, each consisting of a king, queen, knave, and ten pip cards. The suit symbols, based on equipment associated with the hunt, are hunting horns, dog collars, hound tethers, and game nooses. The value of the pip cards is indicated by appropriate repetitions of the suit symbol. The figures, which appear to be based on Franco-Flemish models, were drawn in a bold, free, and engaging, if somewhat unrefined, hand. Their exaggerated and sometimes anachronistic costumes suggest a lampoon of extravagant Burgundian court fashions. Although some period card games are named, it is not known how they were played. Almost all card games did, however, involve some form of gambling. The condition of the set indicates that the cards were hardly used, if at all. It is possible that they were conceived as a collector’s curiosity rather than a deck for play.`,
  },
  {
    id: 3,
    name: "Tournament Helm",
    artist: "Unknown Master Craftsman",
    country: "possibly Italian or French",
    date: "ca. 1420-30",
    image:
      "https://images.metmuseum.org/CRDImages/aa/original/04.3.237_015june2015.jpg",
    description:
      "Although very similar helmets are depicted in early fifteenth century works of art, almost no other actual examples of this type exist today. Perhaps originally designed for use in battle, it appears to have been converted into a jousting helmet during its working lifetime. The armorer’s mark, a Gothic letter T, is found on at least three other pieces of fifteenth-century armor. The helmet was acquired by the Museum as part of the Duc de Dino’s collection in 1904.",
  },
  {
    id: 4,
    name: "Lounge suit",
    artist: "Unknown",
    country: "American",
    date: "ca. 1860",
    image:
      "https://images.metmuseum.org/CRDImages/ci/original/1975.34.13ab_F.jpg",
    description: "Bientôt dispo",
  },
  {
    id: 5,
    name: "Burgonet with Falling Buffe",
    artist: "Unknown",
    country: "French",
    date: "ca. 1550",
    image: "https://images.metmuseum.org/CRDImages/aa/original/DP273710.jpg",
    description: `The medallions on either side of the bowl are embossed with scenes from Greek mythology depicting the Battle of Centaurs and Lapiths, a popular subject in Renaissance art. The compositions derive in part from design by Rosso Fiorentino (1494–1540), one of the Italian artists called to Fontainebleau to work for the French court.

Probably made for Henry II of France (reigned 1547–59), the helmet passed as a diplomatic gift to the Medici court in Florence later in the sixteenth century. It is illustrated in a portrait of Cosimo II de' Medici (1590–1621), grand duke of Tuscany, in the Metropolitan Museum's collection (acc. no. 22.150).`,
  },
  {
    id: 6,
    name: "The Lamentation, from 'The Small Passion'",
    artist: "Albrecht Dürer",
    country: "German",
    date: "ca. 1509",
    image: "https://images.metmuseum.org/CRDImages/dp/original/DP816047.jpg",
    description: "Bientôt dispo",
  },
  {
    id: 7,
    name: "Pendant",
    artist: "Inconnu",
    country: "probably British",
    date: "ca. 1600",
    image:
      "https://images.metmuseum.org/CRDImages/es/original/DP-35195-002.jpg",
    description: "Bientôt dispo",
  },
  {
    id: 8,
    name: "Pendant with a Triton Riding a Unicorn-like Sea Creature",
    artist: "Designer Reinhold Vasters",
    country: "German",
    date: "ca. 1870–95",
    image:
      "https://images.metmuseum.org/CRDImages/es/original/DP-35998-001.jpg",
    description:
      "With the exception of the links of the chain, an additional molding separating the two bands of decoration on the base, and the unicorn’s horn, this jewel is identical to one in a design in the Victoria and Albert Museum, London (inv. No. E 2818-1919), by Reinhold Vasters of Aachen. The design was included among the nineteenth-century Renaissance-style jewels and jewelry designs in that museum’s exhibition Princely Magnificence: Court Jewels of the Renaissance, 1500–1630...",
  },
  {
    id: 9,
    name: "Saint John",
    artist: "Inconnu",
    country: "Italian, Siena",
    date: "late 15th century",
    image: "https://images.metmuseum.org/CRDImages/es/original/DP-172-002.jpg",
    description:
      "Despite exhibiting different styles and factures, the likenesses of Saint John, one of which is paired with an image of the Virgin Mary, warrant discussion together, for they offer a rare opportunity to examine early Renaissance casts of the same composition. All three bronzes, acquired a few years apart, reflect the Late Gothic compositional habits of the fifteenth-century Sienese school of sculpture that began with Jacopo della Quercia and continued through Vecchietta and Neroccio di Bartolommeo de’ Landi. The hallmarks of the school are firm, oblong silhouettes often enclosing quite agitated draperies and fervent facial expressions.",
  },
];
