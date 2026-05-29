import { Locale } from "@/i18n/routing";

export type DinosaurPeriod = "triassic" | "jurassic" | "cretaceous";
export type DinosaurDiet = "herbivore" | "carnivore";
export type SizeCategory = "small" | "medium" | "large" | "huge";

export interface DinosaurContent {
  name: string;
  scientificName?: string;
  shortDescription: string;
  funFacts: string[];
  habitat: string;
  livedWhen: string;
  pronunciation: string;
}

export interface DinosaurMedia {
  heroImage: string;
  cardImage: string;
  video: string;
  comparisonImage?: string;
}

export interface Dinosaur {
  id: string;
  slug: string;
  period: DinosaurPeriod;
  diet: DinosaurDiet;
  sizeCategory: SizeCategory;
  lengthMeters: number;
  heightMeters: number;
  weightKg: number;
  media: DinosaurMedia;
  content: Record<Locale, DinosaurContent>;
}

// Helper to get a dinosaur by slug
export function getDinosaurBySlug(slug: string): Dinosaur | undefined {
  return dinosaurs.find((d) => d.slug === slug);
}

export function getAllDinosaurs(): Dinosaur[] {
  return [...dinosaurs];
}

const dinosaurs: Dinosaur[] = [
  {
    id: "t-rex",
    slug: "t-rex",
    period: "cretaceous",
    diet: "carnivore",
    sizeCategory: "huge",
    lengthMeters: 12.3,
    heightMeters: 3.7,
    weightKg: 8000,
    media: {
      heroImage: "/dinosaurs/t-rex/hero.jpg",
      cardImage: "/dinosaurs/t-rex/card.jpg",
      video: "/dinosaurs/t-rex/video.mp4",
    },
    content: {
      en: {
        name: "Tyrannosaurus rex",
        scientificName: "Tyrannosaurus rex",
        shortDescription: "The famous 'King of the Dinosaurs' with tiny arms and a giant bite!",
        funFacts: [
          "Its teeth were as big as bananas!",
          "T. rex could run as fast as a horse.",
          "Its bite was stronger than any animal alive today.",
          "Even though its arms were small, they were very strong.",
          "One of the best-known dinosaurs in the world!",
        ],
        habitat: "Forests and open plains in what is now North America",
        livedWhen: "About 68 to 66 million years ago",
        pronunciation: "tie-RAN-oh-SAW-rus REX",
      },
      es: {
        name: "Tiranosaurio rex",
        scientificName: "Tyrannosaurus rex",
        shortDescription: "¡El famoso 'Rey de los Dinosaurios' con brazos pequeños y una mordida enorme!",
        funFacts: [
          "¡Sus dientes eran tan grandes como plátanos!",
          "El T. rex podía correr tan rápido como un caballo.",
          "Su mordida era más fuerte que la de cualquier animal vivo hoy.",
          "Aunque sus brazos eran pequeños, eran muy fuertes.",
          "¡Uno de los dinosaurios más famosos del mundo!",
        ],
        habitat: "Bosques y llanuras en lo que hoy es Norteamérica",
        livedWhen: "Hace unos 68 a 66 millones de años",
        pronunciation: "tee-ra-no-SAW-rio REX",
      },
    },
  },
  {
    id: "triceratops",
    slug: "triceratops",
    period: "cretaceous",
    diet: "herbivore",
    sizeCategory: "large",
    lengthMeters: 9,
    heightMeters: 3,
    weightKg: 8000,
    media: {
      heroImage: "/dinosaurs/triceratops/hero.jpg",
      cardImage: "/dinosaurs/triceratops/card.jpg",
      video: "/dinosaurs/triceratops/video.mp4",
    },
    content: {
      en: {
        name: "Triceratops",
        scientificName: "Triceratops horridus",
        shortDescription: "A gentle giant with three big horns and a huge bony frill on its head.",
        funFacts: [
          "Its name means 'three-horned face'!",
          "The horns could be used to protect itself from predators.",
          "Its beak was perfect for chopping tough plants.",
          "Its frill might have been used to show off or stay cool.",
          "It was about the size of an elephant!",
        ],
        habitat: "Woodlands and river valleys in North America",
        livedWhen: "About 68 to 66 million years ago",
        pronunciation: "try-SAIR-uh-tops",
      },
      es: {
        name: "Triceratops",
        scientificName: "Triceratops horridus",
        shortDescription: "Un gigante amable con tres cuernos grandes y un enorme collar óseo en la cabeza.",
        funFacts: [
          "¡Su nombre significa 'cara de tres cuernos'!",
          "Los cuernos podían usarse para protegerse de los depredadores.",
          "Su pico era perfecto para cortar plantas duras.",
          "Su collar podría haber servido para presumir o refrescarse.",
          "¡Era del tamaño de un elefante!",
        ],
        habitat: "Bosques y valles de ríos en Norteamérica",
        livedWhen: "Hace unos 68 a 66 millones de años",
        pronunciation: "tree-se-ra-TOPS",
      },
    },
  },
  {
    id: "stegosaurus",
    slug: "stegosaurus",
    period: "jurassic",
    diet: "herbivore",
    sizeCategory: "large",
    lengthMeters: 9,
    heightMeters: 4,
    weightKg: 5000,
    media: {
      heroImage: "/dinosaurs/stegosaurus/hero.jpg",
      cardImage: "/dinosaurs/stegosaurus/card.jpg",
      video: "/dinosaurs/stegosaurus/video.mp4",
    },
    content: {
      en: {
        name: "Stegosaurus",
        scientificName: "Stegosaurus stenops",
        shortDescription: "The dinosaur with big plates on its back and a spiky tail weapon!",
        funFacts: [
          "It had two rows of large, kite-shaped plates along its back.",
          "Its tail had sharp spikes called a 'thagomizer'.",
          "Its brain was only the size of a walnut!",
          "The plates may have helped it look bigger to scare predators.",
          "It was a peaceful plant-eater.",
        ],
        habitat: "Forests and floodplains in what is now the western United States",
        livedWhen: "About 155 to 150 million years ago",
        pronunciation: "STEG-oh-SAW-rus",
      },
      es: {
        name: "Estegosaurio",
        scientificName: "Stegosaurus stenops",
        shortDescription: "¡El dinosaurio con grandes placas en la espalda y una cola con púas!",
        funFacts: [
          "Tenía dos filas de grandes placas en forma de cometa en la espalda.",
          "Su cola tenía púas afiladas llamadas 'thagomizer'.",
          "¡Su cerebro era solo del tamaño de una nuez!",
          "Las placas podrían haberle ayudado a verse más grande para asustar depredadores.",
          "Era un pacífico comedor de plantas.",
        ],
        habitat: "Bosques y llanuras inundables en lo que hoy es el oeste de Estados Unidos",
        livedWhen: "Hace unos 155 a 150 millones de años",
        pronunciation: "es-te-go-SAW-rio",
      },
    },
  },
  {
    id: "brachiosaurus",
    slug: "brachiosaurus",
    period: "jurassic",
    diet: "herbivore",
    sizeCategory: "huge",
    lengthMeters: 25,
    heightMeters: 13,
    weightKg: 35000,
    media: {
      heroImage: "/dinosaurs/brachiosaurus/hero.jpg",
      cardImage: "/dinosaurs/brachiosaurus/card.jpg",
      video: "/dinosaurs/brachiosaurus/video.mp4",
    },
    content: {
      en: {
        name: "Brachiosaurus",
        scientificName: "Brachiosaurus altithorax",
        shortDescription: "A gentle giant with a super long neck that could reach the tops of tall trees.",
        funFacts: [
          "Its name means 'arm lizard' because its front legs were longer than its back legs.",
          "It could reach leaves more than 9 meters (30 feet) high!",
          "It weighed as much as 5 or 6 elephants.",
          "It had to eat hundreds of kilograms of plants every day.",
          "One of the tallest dinosaurs that ever lived.",
        ],
        habitat: "Woodlands and river areas in North America and Africa",
        livedWhen: "About 154 to 150 million years ago",
        pronunciation: "brack-ee-oh-SAW-rus",
      },
      es: {
        name: "Braquiosaurio",
        scientificName: "Brachiosaurus altithorax",
        shortDescription: "Un gigante amable con un cuello larguísimo que podía alcanzar la cima de los árboles altos.",
        funFacts: [
          "Su nombre significa 'lagarto brazo' porque sus patas delanteras eran más largas que las traseras.",
          "¡Podía alcanzar hojas a más de 9 metros de altura!",
          "Pesaba tanto como 5 o 6 elefantes.",
          "Tenía que comer cientos de kilos de plantas todos los días.",
          "Uno de los dinosaurios más altos que jamás existió.",
        ],
        habitat: "Bosques y zonas de ríos en Norteamérica y África",
        livedWhen: "Hace unos 154 a 150 millones de años",
        pronunciation: "bra-quio-SAW-rio",
      },
    },
  },
  {
    id: "velociraptor",
    slug: "velociraptor",
    period: "cretaceous",
    diet: "carnivore",
    sizeCategory: "small",
    lengthMeters: 2,
    heightMeters: 0.5,
    weightKg: 20,
    media: {
      heroImage: "/dinosaurs/velociraptor/hero.jpg",
      cardImage: "/dinosaurs/velociraptor/card.jpg",
      video: "/dinosaurs/velociraptor/video.mp4",
    },
    content: {
      en: {
        name: "Velociraptor",
        scientificName: "Velociraptor mongoliensis",
        shortDescription: "A small, fast, and smart hunter — much smaller than in the movies!",
        funFacts: [
          "Real Velociraptors were about the size of a large turkey!",
          "They had feathers and a big curved claw on each foot.",
          "They were very intelligent for dinosaurs.",
          "They probably hunted in small groups.",
          "Their name means 'swift thief'.",
        ],
        habitat: "Dry deserts in what is now Mongolia",
        livedWhen: "About 75 to 71 million years ago",
        pronunciation: "veh-LOSS-ih-RAP-tor",
      },
      es: {
        name: "Velociraptor",
        scientificName: "Velociraptor mongoliensis",
        shortDescription: "Un cazador pequeño, rápido e inteligente — ¡mucho más chico que en las películas!",
        funFacts: [
          "¡Los velociraptors reales eran del tamaño de un pavo grande!",
          "Tenían plumas y una gran garra curva en cada pata.",
          "Eran muy inteligentes para ser dinosaurios.",
          "Probablemente cazaban en pequeños grupos.",
          "Su nombre significa 'ladrón veloz'.",
        ],
        habitat: "Desiertos secos en lo que hoy es Mongolia",
        livedWhen: "Hace unos 75 a 71 millones de años",
        pronunciation: "ve-lo-ci-RAP-tor",
      },
    },
  },
  {
    id: "ankylosaurus",
    slug: "ankylosaurus",
    period: "cretaceous",
    diet: "herbivore",
    sizeCategory: "large",
    lengthMeters: 8,
    heightMeters: 1.7,
    weightKg: 6000,
    media: {
      heroImage: "/dinosaurs/ankylosaurus/hero.jpg",
      cardImage: "/dinosaurs/ankylosaurus/card.jpg",
      video: "/dinosaurs/ankylosaurus/video.mp4",
    },
    content: {
      en: {
        name: "Ankylosaurus",
        scientificName: "Ankylosaurus magniventris",
        shortDescription: "A walking tank covered in armor with a massive club at the end of its tail.",
        funFacts: [
          "It was covered in thick bony armor and spikes.",
          "Its tail club could break the bones of a T. rex!",
          "It was one of the last dinosaurs before the big extinction.",
          "Even its eyelids were protected by armor!",
          "Its name means 'fused lizard' because of its armor.",
        ],
        habitat: "Forests and plains in North America",
        livedWhen: "About 68 to 66 million years ago",
        pronunciation: "ang-KYE-lo-SAW-rus",
      },
      es: {
        name: "Anquilosaurio",
        scientificName: "Ankylosaurus magniventris",
        shortDescription: "Un tanque andante cubierto de armadura con una enorme maza al final de la cola.",
        funFacts: [
          "Estaba cubierto de gruesa armadura ósea y púas.",
          "¡Su maza de cola podía romper los huesos de un T. rex!",
          "Fue uno de los últimos dinosaurios antes de la gran extinción.",
          "¡Incluso sus párpados estaban protegidos por armadura!",
          "Su nombre significa 'lagarto fusionado' por su armadura.",
        ],
        habitat: "Bosques y llanuras en Norteamérica",
        livedWhen: "Hace unos 68 a 66 millones de años",
        pronunciation: "an-qui-lo-SAW-rio",
      },
    },
  },
  {
    id: "parasaurolophus",
    slug: "parasaurolophus",
    period: "cretaceous",
    diet: "herbivore",
    sizeCategory: "large",
    lengthMeters: 10,
    heightMeters: 4,
    weightKg: 2500,
    media: {
      heroImage: "/dinosaurs/parasaurolophus/hero.jpg",
      cardImage: "/dinosaurs/parasaurolophus/card.jpg",
      video: "/dinosaurs/parasaurolophus/video.mp4",
    },
    content: {
      en: {
        name: "Parasaurolophus",
        scientificName: "Parasaurolophus walkeri",
        shortDescription: "The dinosaur with a long, hollow crest on its head that could make trumpet sounds!",
        funFacts: [
          "Its crest could be over 1.5 meters (5 feet) long!",
          "It could make loud honking or trumpeting sounds with its crest.",
          "It probably used the sounds to talk to other dinosaurs or warn of danger.",
          "It could walk on two or four legs.",
          "One of the most recognizable duck-billed dinosaurs.",
        ],
        habitat: "Forests and floodplains in North America",
        livedWhen: "About 76 to 73 million years ago",
        pronunciation: "par-uh-SAW-roh-LOF-us",
      },
      es: {
        name: "Parasaurolophus",
        scientificName: "Parasaurolophus walkeri",
        shortDescription: "¡El dinosaurio con una larga cresta hueca en la cabeza que podía hacer sonidos de trompeta!",
        funFacts: [
          "¡Su cresta podía medir más de 1.5 metros de largo!",
          "Podía hacer sonidos fuertes de trompeta o bocina con su cresta.",
          "Probablemente usaba los sonidos para hablar con otros dinosaurios o avisar de peligro.",
          "Podía caminar sobre dos o cuatro patas.",
          "Uno de los dinosaurios de pico de pato más reconocibles.",
        ],
        habitat: "Bosques y llanuras inundables en Norteamérica",
        livedWhen: "Hace unos 76 a 73 millones de años",
        pronunciation: "pa-ra-sau-ro-LO-fus",
      },
    },
  },
];

export default dinosaurs;