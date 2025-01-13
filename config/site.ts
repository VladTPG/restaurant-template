export const siteConfig = {
  name: "Restaurant Name",
  description: "Experiența culinară de neuitat în inima orașului",
  logo: "/logo.jpg",

  // Theme colors
  theme: {
    colors: {
      light: {
        primary: "#e09f3e", // Portocaliu ars elegant pentru accente
        primaryDark: "#c97a24", // Portocaliu închis pentru hover
        background: "#ffffff", // Alb curat pentru fundal
        backgroundAlt: "#faf3e0", // Crem cald pentru secțiuni alternative
        textPrimary: "#2f2e2d", // Gri-negru rafinat pentru text principal
        textSecondary: "#706c61", // Gri cald pentru text secundar
        accent1: "#bc6c25", // Maro caramel pentru accente puternice
        accent2: "#6a994e", // Verde natural pentru contrast și prospețime
      },
      dark: {
        primary: "#f4a261", // Portocaliu luminos pentru dark mode
        primaryDark: "#c97a24", // Portocaliu roșiatic pentru hover
        background: "#1c1b1a", // Negru moale pentru fundal
        backgroundAlt: "#2b2927", // Gri închis pentru secțiuni alternative
        textPrimary: "#f5f5f4", // Alb cald pentru text principal
        textSecondary: "#c2bcb5", // Gri deschis pentru text secundar
        accent1: "#e09f3e", // Portocaliu ars pentru accente
        accent2: "#8fb369", // Verde olive deschis pentru detalii naturale
      },
    },
  },
  // Hero section
  hero: {
    image: "/pexels-fotios-photos-1024359.jpg",
    title: "Restaurant Name",
    subtitle: "O experiență culinară de neuitat",
    cta: [
      {
        text: "Vezi Meniul",
        link: "/menu",
        primary: true,
      },
      {
        text: "Rezervă Acum",
        link: "/reservations",
        primary: false,
      },
    ],
  },

  // Featured specialties
  specialties: [
    {
      title: "Specialitatea Casei",
      image: "/booke.jpg",
      description: "O combinație unică de arome tradiționale și moderne",
    },
    {
      title: "Pasta Artizanală",
      image: "/joseph.jpg",
      description: "Preparată manual după rețete autentice italiene",
    },
    {
      title: "Desert Premium",
      image: "/odiseo.jpg",
      description: "Creații dulci care încântă toate simțurile",
    },
    {
      title: "Desert Premium",
      image: "/odiseo.jpg",
      description: "Creații dulci care încântă toate simțurile",
    },
  ],

  // Contact information
  contact: {
    address: "Str. Exemplu, Nr. 123",
    city: "București",
    country: "România",
    phone: "0123 456 789",
    email: "contact@restaurant.ro",
  },

  // Opening hours
  hours: {
    monday: "11:00 - 22:00",
    tuesday: "11:00 - 22:00",
    wednesday: "11:00 - 22:00",
    thursday: "11:00 - 22:00",
    friday: "11:00 - 22:00",
    saturday: "10:00 - 23:00",
    sunday: "10:00 - 21:00",
  },

  // Social media links
  social: {
    facebook: "https://facebook.com/restaurant",
    instagram: "https://instagram.com/restaurant",
    tiktok: "https://tiktok.com/@restaurant",
  },

  // Navigation menu
  navigation: [
    { href: "/", label: "Acasă" },
    { href: "/about", label: "Despre Noi" },
    { href: "/menu", label: "Meniu" },
    { href: "/events", label: "Evenimente" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ],

  // Restaurant menu
  menu: {
    categories: [
      {
        name: "Aperitive",
        items: [
          {
            name: "Bruschette Miste",
            description:
              "Selecție de bruschete cu diverse topinguri mediteraneene",
            price: "32",
            allergens: ["gluten", "lactose"],
            dietary: ["vegetarian"],
          },
          {
            name: "Carpaccio di Manzo",
            description: "Felii fine de mușchi de vită cu rucola și parmezan",
            price: "45",
            allergens: ["lactose"],
          },
          {
            name: "Antipasto Misto",
            description: "Selecție de mezeluri italiene, brânzeturi și măsline",
            price: "52",
          },
          {
            name: "Caprese di Bufala",
            description: "Mozzarella de bivoliță cu roșii și busuioc proaspăt",
            price: "38",
          },
          {
            name: "Prosciutto e Melone",
            description:
              "Prosciutto crudo cu pepene galben și reducție balsamică",
            price: "42",
          },
          {
            name: "Insalata di Mare",
            description: "Fructe de mare marinate cu citrice și ierburi",
            price: "48",
            isSpicy: true,
          },
          {
            name: "Penne all'Arrabbiata",
            description: "Paste cu sos picant de roșii și usturoi",
            price: "42",
            allergens: ["gluten"],
            dietary: ["spicy", "vegan"],
          },
          {
            name: "Calamari Fritti",
            description: "Inele de calamar pane cu sos aioli",
            price: "48",
            allergens: ["gluten", "eggs"],
            dietary: ["frozen"],
          },
        ],
      },
      {
        name: "Paste și Risotto",
        items: [
          {
            name: "Spaghetti alle Vongole",
            description: "Spaghete cu scoici, usturoi și vin alb",
            price: "52",
            allergens: ["gluten", "shellfish"],
          },
          {
            name: "Pappardelle al Ragù",
            description: "Pappardelle cu ragù tradițional de vită",
            price: "48",
            allergens: ["gluten", "eggs"],
          },
          {
            name: "Risotto ai Funghi Porcini",
            description: "Risotto cremos cu hribi și parmezan",
            price: "54",
            allergens: ["lactose"],
            dietary: ["vegetarian"],
          },
          {
            name: "Ravioli di Zucca",
            description: "Ravioli umplut cu dovleac și sos de salvie",
            price: "46",
            allergens: ["gluten", "eggs", "lactose"],
            dietary: ["vegetarian"],
          },
        ],
      },
      {
        name: "Feluri Principale",
        items: [
          {
            name: "Osso Buco alla Milanese",
            description: "Osso buco tradițional cu risotto șofran",
            price: "85",
            allergens: ["lactose"],
          },
          {
            name: "Branzino al Forno",
            description: "Biban de mare la cuptor cu legume mediteraneene",
            price: "78",
            allergens: ["fish"],
            dietary: ["frozen"],
          },
          {
            name: "Tagliata di Manzo",
            description: "Mușchi de vită cu rucola și parmezan",
            price: "95",
            allergens: ["lactose"],
          },
          {
            name: "Cotoletta alla Milanese",
            description: "Cotlet de vițel pane cu salată de rucola",
            price: "72",
            allergens: ["gluten", "eggs", "lactose"],
          },
        ],
      },
      {
        name: "Deserturi",
        items: [
          {
            name: "Tiramisu Classico",
            description: "Tiramisu tradițional cu mascarpone și cafea",
            price: "32",
            allergens: ["eggs", "lactose", "gluten"],
          },
          {
            name: "Panna Cotta ai Frutti di Bosco",
            description: "Panna cotta cu fructe de pădure",
            price: "28",
            allergens: ["lactose"],
            dietary: ["vegetarian"],
          },
          {
            name: "Cannoli Siciliani",
            description: "Cannoli umplute cu ricotta și pistacchio",
            price: "34",
            allergens: ["lactose", "gluten", "nuts"],
          },
          {
            name: "Torta al Cioccolato",
            description: "Tort de ciocolată cu înghețată de vanilie",
            price: "30",
            allergens: ["eggs", "lactose", "gluten"],
            dietary: ["vegetarian"],
          },
        ],
      },
      {
        name: "Aperitive Reci",
        items: [
          {
            name: "Tartare di Tonno",
            description: "Tartar de ton roșu cu avocado și citrice",
            price: "58",
            allergens: ["fish"],
            dietary: ["frozen"],
          },
          {
            name: "Vitello Tonnato",
            description: "Felii fine de vițel cu sos de ton și capere",
            price: "46",
            allergens: ["fish", "eggs"],
          },
          {
            name: "Insalata di Mare",
            description:
              "Salată de fructe de mare cu citrice și ierburi aromate",
            price: "52",
            allergens: ["shellfish", "fish"],
            dietary: ["frozen"],
          },
        ],
      },
      {
        name: "Aperitive Calde",
        items: [
          {
            name: "Polpette al Sugo",
            description: "Chifteluțe italienești în sos de roșii",
            price: "38",
            allergens: ["gluten", "eggs"],
          },
          {
            name: "Melanzane alla Parmigiana",
            description: "Vinete gratinate cu mozzarella și parmezan",
            price: "42",
            allergens: ["lactose"],
            dietary: ["vegetarian"],
          },
          {
            name: "Gamberi all'Aglio",
            description: "Creveți trași în unt cu usturoi și vin alb",
            price: "56",
            allergens: ["shellfish", "lactose"],
            dietary: ["frozen"],
          },
        ],
      },
      {
        name: "Supe și Creme",
        items: [
          {
            name: "Zuppa di Pesce",
            description: "Supă tradițională de pește și fructe de mare",
            price: "48",
            allergens: ["fish", "shellfish"],
            dietary: ["frozen"],
          },
          {
            name: "Crema di Funghi",
            description: "Cremă de ciuperci cu trufe și crutoane",
            price: "36",
            allergens: ["gluten", "lactose"],
            dietary: ["vegetarian"],
          },
          {
            name: "Minestrone alla Genovese",
            description: "Supă de legume cu pesto de busuioc",
            price: "32",
            allergens: ["nuts"],
            dietary: ["vegan"],
          },
        ],
      },
      {
        name: "Specialități de Mare",
        items: [
          {
            name: "Grigliata Mista di Pesce",
            description: "Selecție de pește și fructe de mare la grătar",
            price: "145",
            allergens: ["fish", "shellfish"],
            dietary: ["frozen"],
          },
          {
            name: "Polpo alla Griglia",
            description: "Caracatiță la grătar cu cartofi și sos de măsline",
            price: "98",
            allergens: ["shellfish"],
            dietary: ["frozen"],
          },
          {
            name: "Salmone al Forno",
            description: "Somon la cuptor cu sparanghel și sos olandez",
            price: "88",
            allergens: ["fish", "eggs", "lactose"],
            dietary: ["frozen"],
          },
        ],
      },
      {
        name: "Specialități din Carne",
        items: [
          {
            name: "Filetto al Pepe Verde",
            description: "Mușchi de vită cu sos de piper verde",
            price: "115",
            allergens: ["lactose"],
            dietary: ["spicy"],
          },
          {
            name: "Costolette d'Agnello",
            description:
              "Cotlete de miel cu ierburi aromate și legume la grătar",
            price: "98",
          },
          {
            name: "Anatra all'Arancia",
            description: "Piept de rață cu sos de portocale și risotto",
            price: "92",
            allergens: ["lactose"],
          },
        ],
      },
      {
        name: "Deserturi Speciale",
        items: [
          {
            name: "Soufflé al Cioccolato",
            description: "Sufleu de ciocolată cu înghețată de vanilie",
            price: "38",
          },
          {
            name: "Millefoglie",
            description: "Foietaj cu cremă de vanilie și fructe de pădure",
            price: "36",
          },
          {
            name: "Semifreddo alle Mandorle",
            description: "Semifreddo cu migdale caramelizate și sos de caramel",
            price: "34",
          },
        ],
      },
    ],
  },

  // Events
  events: {
    upcoming: [
      {
        title: "Seară de Wine Tasting",
        date: "15 Mai 2024",
        image: "/wine-tasting.jpg",
        description:
          "O seară dedicată degustării de vinuri premium și preparatelor asortate",
      },
      {
        title: "Cină cu Muzică Live",
        date: "25 Mai 2024",
        image: "/live-music-dinner.jpg",
        description:
          "Bucurați-vă de o cină rafinată acompaniată de muzică live interpretată de artiști locali.",
      },
      {
        title: "Atelier de Gătit Italian",
        date: "5 Iunie 2024",
        image: "/italian-cooking-workshop.jpg",
        description:
          "Descoperiți secretele bucătăriei italiene într-un atelier interactiv alături de un bucătar-șef experimentat.",
      },
    ],
    private: [
      {
        title: "Nunți",
        image: "/wedding.jpg",
        capacity: "Până la 150 persoane",
        description: "Organizăm nunți de vis în locația noastră elegantă",
      },
      // Add more private event types...
    ],
  },

  // About page content
  about: {
    hero: {
      image: "/about-hero.jpg",
      title: "Povestea Noastră",
      subtitle: "O tradiție culinară ce durează de peste 20 de ani",
    },
    story: {
      title: "Începuturile Noastre",
      content: [
        "Totul a început în anul 2000, când familia noastră a decis să împărtășească pasiunea pentru gastronomia autentică cu întreaga comunitate.",
        "De atunci, am crescut constant, păstrând aceeași dedicare pentru calitate și aceeași dragoste pentru arta culinară.",
        "Duis duis do aliqua velit quis id occaecat fugiat. Eiusmod anim proident labore cupidatat. Magna est Lorem esse quis qui. Dolore quis pariatur id et ea laborum aliqua laboris anim. Nulla eu reprehenderit consectetur quis sunt voluptate cillum cillum sit fugiat nulla ipsum deserunt. Eu mollit dolore nisi labore tempor adipisicing laborum.",
        "Duis duis do aliqua velit quis id occaecat fugiat. Eiusmod anim proident labore cupidatat. Magna est Lorem esse quis qui. Dolore quis pariatur id et ea laborum aliqua laboris anim. Nulla eu reprehenderit consectetur quis sunt voluptate cillum cillum sit fugiat nulla ipsum deserunt. Eu mollit dolore nisi labore tempor adipisicing laborum.",
      ],
      image: "/about-story.jpg",
    },
    team: [
      {
        name: "Chef Ioan Popescu",
        role: "Bucătar Șef",
        image: "/chef-1.jpg",
        description:
          "Cu peste 15 ani de experiență în bucătăria internațională",
      },
      {
        name: "Maria Ionescu",
        role: "Chef Patiser",
        image: "/chef-2.jpg",
        description:
          "Specializată în deserturi italiene și franceze, cu experiență în restaurante cu stele Michelin",
      },
      {
        name: "Alexandru Dumitrescu",
        role: "Sommelier",
        image: "/chef-3.jpg",
        description:
          "Expert în vinuri cu certificare internațională și pasiune pentru vinurile românești premium",
      },
      {
        name: "Elena Radu",
        role: "Manager Restaurant",
        image: "/chef-4.jpg",
        description:
          "Coordonează echipa cu profesionalism și dedicare de peste 10 ani",
      },
      {
        name: "Cristian Stancu",
        role: "Sous Chef",
        image: "/chef-5.jpg",
        description:
          "Specializat în bucătăria mediteraneană și fusion, cu experiență internațională",
      },
    ],
  },

  gallery: {
    images: [
      {
        src: "/gallery/interior-1.jpg",
        alt: "Atmosferă elegantă în sala principală",
      },
      {
        src: "/gallery/interior-2.jpg",
        alt: "Zona de lounge și bar",
      },
      {
        src: "/gallery/food-1.jpg",
        alt: "Risotto cu hribi și parmezan",
      },
      {
        src: "/gallery/food-2.jpg",
        alt: "Tagliata de vită cu rucola",
      },
      {
        src: "/gallery/food-3.jpg",
        alt: "Burrata cu roșii cherry și busuioc",
      },
      {
        src: "/gallery/dessert-1.jpg",
        alt: "Tiramisu tradițional",
      },
      {
        src: "/gallery/dessert-2.jpg",
        alt: "Panna cotta cu fructe de pădure",
      },
      {
        src: "/gallery/wine-1.jpg",
        alt: "Selecție de vinuri premium",
      },
      {
        src: "/gallery/event-1.jpg",
        alt: "Organizare evenimente private",
      },
      {
        src: "/gallery/chef-1.jpg",
        alt: "Chef-ul nostru la lucru",
      },
      {
        src: "/gallery/ambiance-1.jpg",
        alt: "Atmosferă romantică la lumina lumânărilor",
      },
      {
        src: "/gallery/terrace-1.jpg",
        alt: "Terasă cu vedere panoramică",
      },
    ],
  },

  testimonials: [
    {
      name: "Maria Popescu",
      role: "Client Fidel",
      content:
        "O experiență culinară extraordinară! Fiecare vizită aici este o încântare pentru toate simțurile. Felicitări întregii echipe pentru serviciile impecabile.",
      image: "/testimonials/avatar-1.jpg",
    },
    {
      name: "Alexandru Ionescu",
      role: "Food Critic",
      content:
        "Unul dintre cele mai rafinate restaurante din oraș. Combinația perfectă între bucătăria tradițională și cea modernă, într-o atmosferă elegantă.",
      image: "/testimonials/avatar-2.jpg",
    },
    {
      name: "Elena Dumitrescu",
      role: "Influencer Culinar",
      content:
        "Am descoperit aici nu doar mâncare excelentă, ci și pasiune autentică pentru gastronomie. Un loc care merită vizitat pentru momentele speciale.",
      image: "/testimonials/avatar-3.jpg",
    },
  ],
};
