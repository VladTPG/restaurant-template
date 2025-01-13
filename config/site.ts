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
    cta: {
      text: "Vezi Meniul",
      link: "/menu",
    },
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
          },
          {
            name: "Carpaccio de Vită",
            description: "Felii fine de mușchi de vită cu rucola și parmezan",
            price: "45",
          },
          {
            name: "Burrata con Prosciutto",
            description: "Burrata cremoasă cu prosciutto și roșii cherry",
            price: "48",
          },
          {
            name: "Calamari Fritti",
            description: "Inele de calamari cu sos aioli și lămâie",
            price: "38",
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
          },
          {
            name: "Pappardelle al Ragù",
            description: "Pappardelle cu ragù tradițional de vită",
            price: "48",
          },
          {
            name: "Risotto ai Funghi Porcini",
            description: "Risotto cremos cu hribi și parmezan",
            price: "54",
          },
          {
            name: "Ravioli di Zucca",
            description: "Ravioli umplut cu dovleac și sos de salvie",
            price: "46",
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
          },
          {
            name: "Branzino al Forno",
            description: "Biban de mare la cuptor cu legume mediteraneene",
            price: "78",
          },
          {
            name: "Tagliata di Manzo",
            description: "Mușchi de vită cu rucola și parmezan",
            price: "95",
          },
          {
            name: "Cotoletta alla Milanese",
            description: "Cotlet de vițel pane cu salată de rucola",
            price: "72",
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
          },
          {
            name: "Panna Cotta ai Frutti di Bosco",
            description: "Panna cotta cu fructe de pădure",
            price: "28",
          },
          {
            name: "Cannoli Siciliani",
            description: "Cannoli umplute cu ricotta și pistacchio",
            price: "34",
          },
          {
            name: "Torta al Cioccolato",
            description: "Tort de ciocolată cu înghețată de vanilie",
            price: "30",
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
      // Add more team members...
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
