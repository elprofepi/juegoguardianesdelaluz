import { LevelData } from './types';

// The final phrase formed by the 8 secret words
export const FINAL_PHRASE = [
  "QUIEN", "BUSCA", "LA", "VERDAD", "ENCUENTRA", "LA", "LUZ", "ETERNA"
];

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "El Pacto de los Patriarcas",
    icon: "📜",
    story: "En el inicio, Jacob tuvo **12** hijos que formaron las tribus. Su hijo José fue vendido por sus hermanos por **20** piezas de plata, pero Dios transformó el mal en bien tras años de abundancia y hambruna. Un guardián debe conocer los números de la traición y la fundación.",
    question: "Calcula: (Hijos de Jacob × Piezas de plata de José) ÷ Los 10 Mandamientos",
    answer: "24",
    secretWord: "QUIEN"
  },
  {
    id: 2,
    title: "El Éxodo y la Libertad",
    icon: "🌊",
    story: "Moisés guio al pueblo durante **40** años por el desierto. Antes de partir, Egipto sufrió **10** plagas terribles. Dios entregó la Ley en **2** tablas de piedra. La libertad requiere perseverancia matemática.",
    question: "Calcula: (Años en el desierto - Número de Plagas) ÷ Tablas de la Ley",
    answer: "15",
    secretWord: "BUSCA"
  },
  {
    id: 3,
    title: "Reyes y Templos",
    icon: "👑",
    story: "David, el segundo rey, venció al gigante con **5** piedras. Su hijo Salomón construyó el Gran Templo, tardando **7** años en completarlo. Goliat medía **6** codos de altura. La arquitectura divina es precisa.",
    question: "Calcula: (Piedras de David × Años de construcción del Templo) - Altura de Goliat",
    answer: "29",
    secretWord: "LA"
  },
  {
    id: 4,
    title: "Profetas y Milagros",
    icon: "🦁",
    story: "Jonás estuvo **3** días en el gran pez. Elías desafió a los profetas de Baal empapando el altar con **12** cántaros de agua (4 cántaros, 3 veces). Daniel oraba **3** veces al día. La fe multiplica los resultados.",
    question: "Calcula: (Días de Jonás × Veces que oraba Daniel) + Cántaros de Elías",
    answer: "21",
    secretWord: "VERDAD"
  },
  {
    id: 5,
    title: "El Pan de Vida",
    icon: "🐟",
    story: "En la multiplicación de los panes, Jesús usó **5** panes y **2** peces para alimentar a la multitud. Sobraron **12** canastas llenas. La providencia siempre da más de lo que restamos.",
    question: "Calcula: (Canastas sobrantes × Peces) - Panes",
    answer: "19",
    secretWord: "ENCUENTRA"
  },
  {
    id: 6,
    title: "La Pasión",
    icon: "✝️",
    story: "La traición tuvo un precio de **30** monedas. Pedro negó al maestro **3** veces antes de que cantara el gallo. Jesús fue crucificado junto a **2** ladrones. En la hora oscura, los números revelan la verdad.",
    question: "Calcula: (Monedas de la traición ÷ Negaciones de Pedro) + Ladrones crucificados",
    answer: "12",
    secretWord: "LA"
  },
  {
    id: 7,
    title: "La Iglesia Naciente",
    icon: "🔥",
    story: "En Pentecostés, el Espíritu llegó **50** días después de la Pascua. Para servir a las mesas, los apóstoles eligieron a los primeros **7** diáconos (como Esteban). La iglesia crece restando divisiones.",
    question: "Calcula: Días de Pentecostés - Número de primeros diáconos",
    answer: "43",
    secretWord: "LUZ"
  },
  {
    id: 8,
    title: "La Revelación Final",
    icon: "Ω",
    story: "En el Apocalipsis, Juan vio **24** ancianos alrededor del trono y un rollo sellado con **7** sellos. También vio **4** jinetes que traían juicio. El final es el comienzo de la eternidad.",
    question: "Calcula: (Ancianos - Sellos) × Jinetes",
    answer: "68",
    secretWord: "ETERNA"
  }
];