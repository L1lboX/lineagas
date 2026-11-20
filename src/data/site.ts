export interface GasProduct {
  id: string;
  name: string;
  capacity: string;
  tier: 'Regular' | 'Premium' | 'Industrial';
  valveType: string;
  description: string;
  badge: string;
  image: string;
  isPlaceholder: boolean;
}

export interface GasBrand {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  has45kg?: boolean;
  image45?: string;
  hasValve?: boolean;
  imageValve?: string;
  products: {
    regular: GasProduct;
    premium: GasProduct;
    industrial45?: GasProduct;
  };
}

export const site = {
  brand: "Línea Gas",
  tagline: "La energía que necesitas, más cerca de ti.",
  isDemo: true,
  seo: {
    siteUrl: "https://lineagascix.com",
    title: "Línea Gas | Balón de Gas a Domicilio en Chiclayo y Distritos",
    description: "Pide tu balón de gas a domicilio en Chiclayo y Lambayeque. Entrega rápida de 10 kg Regular, Premium y 45 kg Industrial de Costagas, Solgas y Sipán Gas. ¡Pide por WhatsApp!",
    ogImage: "/images/og-preview.png",
    twitterCard: "summary_large_image",
    keywords: [
      "Línea Gas",
      "gas a domicilio Chiclayo",
      "balón de gas Chiclayo",
      "balón de gas 10kg",
      "Solgas Chiclayo",
      "Costagas Chiclayo",
      "Sipán Gas Chiclayo",
      "gas industrial 45kg Chiclayo",
      "distribuidora de gas Chiclayo",
      "gas GLP Lambayeque",
      "pedir gas por WhatsApp Chiclayo",
      "gas delivery Chiclayo"
    ],
  },
  analytics: {
    googleAnalyticsId: "", // Inserta aquí tu ID de medición GA4, ej: "G-XXXXXXXXXX"
    googleSearchConsoleVerification: "", // Inserta aquí el código del tag meta de Google Search Console, ej: "abc123xyz..."
  },
  contact: {
    whatsappNumber: "927089151", // Número para el pedido
    phoneNumber: "074 603063",
    email: "lineagassac@gmail.com",
    address: "Ubicación sujeta a confirmación oficial",
    addressLocality: "Chiclayo",
    addressRegion: "Lambayeque",
    postalCode: "14001",
    addressCountry: "PE",
    geo: {
      latitude: -6.7714,
      longitude: -79.8409,
    },
    businessHours: "Lunes a Domingo: 7:00 am - 9:00 pm",
    mapEmbedUrl: "",
    socialLinks: [
      { name: "Facebook", url: "https://www.facebook.com/share/1E2nh4naHH/", pending: false, icon: "/images/facebook.svg" },
      { name: "Instagram", url: "", pending: true },
    ],
  },
  // Las 3 marcas oficiales solicitadas
  brands: [
    {
      id: "costagas",
      name: "Costagas",
      badge: "Distribución oficial",
      description: "Balones de 10 kg y 45 kg de alto rendimiento para el hogar, restaurantes y comercios.",
      image: "/images/products/costaGas.webp",
      has45kg: true,
      image45: "/images/products/costaGas45.webp",
      hasValve: true,
      imageValve: "/images/products/valvulaPrmCosta.webp",
      products: {
        regular: {
          id: "costagas-10kg-regular",
          name: "Costagas 10 kg Regular",
          capacity: "10 kg",
          tier: "Regular",
          valveType: "Válvula de rosca estándar",
          description: "Conexión tradicional, pesaje exacto y flama constante para el día a día.",
          badge: "Línea Tradicional",
          image: "/images/products/costaGas.webp",
          isPlaceholder: false,
        },
        premium: {
          id: "costagas-10kg-premium",
          name: "Costagas 10 kg Premium",
          capacity: "10 kg",
          tier: "Premium",
          valveType: "Válvula de seguridad acople rápido (Click-on)",
          description: "Sistema de conexión rápida antigoteo con flama azul de máxima pureza.",
          badge: "Línea Premium",
          image: "/images/products/costaGas.webp",
          isPlaceholder: false,
        },
        industrial45: {
          id: "costagas-45kg-industrial",
          name: "Costagas 45 kg Industrial",
          capacity: "45 kg",
          tier: "Industrial",
          valveType: "Válvula POL de alto caudal",
          description: "Cilindro de 45 kg de gran capacidad y autonomía para negocios, pollerías y restaurantes.",
          badge: "Línea Comercial / Industrial",
          image: "/images/products/costaGas45.webp",
          isPlaceholder: false,
        },
      },
    },
    {
      id: "solgas",
      name: "Solgas",
      badge: "Marca líder",
      description: "Garantía de confianza y máxima seguridad en presentaciones de 10 kg y 45 kg.",
      image: "/images/products/solGas.webp",
      has45kg: true,
      image45: "/images/products/solGas45.webp",
      hasValve: true,
      imageValve: "/images/products/valvulaSolgas.webp",
      products: {
        regular: {
          id: "solgas-10kg-regular",
          name: "Solgas 10 kg Regular",
          capacity: "10 kg",
          tier: "Regular",
          valveType: "Válvula tradicional de rosca",
          description: "La alternativa de siempre para el hogar. Peso neto garantizado y rendimiento óptimo.",
          badge: "Línea Tradicional",
          image: "/images/products/solGas.webp",
          isPlaceholder: false,
        },
        premium: {
          id: "solgas-10kg-premium",
          name: "Solgas 10 kg Premium",
          capacity: "10 kg",
          tier: "Premium",
          valveType: "Válvula acople rápido de alta seguridad",
          description: "Máxima protección familiar, encendido instantáneo y tecnología de sellado hermético.",
          badge: "Línea Premium",
          image: "/images/products/solGas.webp",
          isPlaceholder: false,
        },
        industrial45: {
          id: "solgas-45kg-industrial",
          name: "Solgas 45 kg Industrial",
          capacity: "45 kg",
          tier: "Industrial",
          valveType: "Válvula POL reforzada de seguridad",
          description: "Cilindro industrial de 45 kg con flama constante y alto rendimiento continuo.",
          badge: "Línea Comercial / Industrial",
          image: "/images/products/solGas45.webp",
          isPlaceholder: false,
        },
      },
    },
    {
      id: "sipangas",
      name: "Sipán Gas",
      badge: "Energía del norte",
      description: "Calidad comprobada y excelente economía en presentaciones de 10 kg.",
      image: "/images/products/sipanGas.webp",
      has45kg: false,
      products: {
        regular: {
          id: "sipangas-10kg-regular",
          name: "Sipán Gas 10 kg Regular",
          capacity: "10 kg",
          tier: "Regular",
          valveType: "Válvula convencional",
          description: "Ideal para la cocina familiar con excelente relación de costo y duración.",
          badge: "Línea Tradicional",
          image: "/images/products/sipanGas.webp",
          isPlaceholder: false,
        },
        premium: {
          id: "sipangas-10kg-premium",
          name: "Sipán Gas 10 kg Premium",
          capacity: "10 kg",
          tier: "Premium",
          valveType: "Válvula de acople seguro especial",
          description: "Presentación reforzada con mayor eficiencia térmica y conexión segura.",
          badge: "Línea Premium",
          image: "/images/products/sipanGas.webp",
          isPlaceholder: false,
        },
      },
    },
  ] as GasBrand[],
  about: {
    title: "Conoce Línea Gas",
    statusBadge: "Sobre Nuestra Empresa",
    image: "/images/fotoInstitucional.webp",
    intro: "En Línea Gas nos dedicamos a la venta y distribución de gas doméstico y comercial en Chiclayo y distritos de Lambayeque de forma puntual, segura y confiable. Trabajamos con las principales marcas del mercado para brindarte siempre la mejor alternativa.",
    history: {
      title: "Nuestra Historia",
      text: "Nacemos con el compromiso de acercar energía a los hogares y negocios de Chiclayo y toda la región Lambayeque, transformando el pedido de gas en un proceso inmediato, transparente y con entrega puntual en tu puerta.",
    },
    mission: {
      title: "Misión",
      text: "Llevar energía segura a cada cocina y negocio en Chiclayo con rapidez de despacho, pesaje exacto y una atención al cliente cercana y responsable.",
    },
    vision: {
      title: "Visión",
      text: "Ser la distribuidora de gas envasado de referencia en Chiclayo y la región Lambayeque por confianza, rapidez de entrega y excelencia en el servicio a domicilio.",
    },
    values: [
      { title: "Puntualidad", desc: "Respetamos tu tiempo y tus necesidades con entregas coordinadas con precisión en Chiclayo y distritos." },
      { title: "Seguridad ante todo", desc: "Cilindros revisados, válvulas verificadas y precintos de garantía intactos de fábrica." },
      { title: "Transparencia", desc: "Pesaje conforme, precios claros y asesoría honesta en cada marca y presentación." },
      { title: "Cercanía", desc: "Atención humana y amable tanto por WhatsApp como por teléfono directo." },
    ],
  },
  benefits: [
    {
      title: "Atención directa",
      description: "Comunícate por WhatsApp o llamada directa sin intermediarios ni esperas complejas.",
      icon: "chat",
    },
    {
      title: "Marcas autorizadas",
      description: "Disponibilidad en Costagas, Solgas y Sipán Gas en presentaciones de 10 kg Regular y Premium.",
      icon: "cylinder",
    },
    {
      title: "Información y seguridad clara",
      description: "Pesaje conforme, precintos íntegros y canales de atención transparentes para tu total tranquilidad.",
      icon: "shield",
    },
  ],
} as const;

export function getWhatsAppUrl(customMessage: string): string | null {
  const number = site.contact.whatsappNumber.trim().replace(/\D/g, '');
  if (!number) return null;
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${number}?text=${encodedText}`;
}

export function getPhoneTel(): string | null {
  const phone = site.contact.phoneNumber.trim().replace(/[^\d+]/g, '');
  if (!phone) return null;
  return `tel:${phone}`;
}

export function getMailtoUrl(subject: string = "Consulta sobre pedido de gas - Línea Gas", body: string = ""): string {
  const email = site.contact.email.trim();
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${email}${query}`;
}

export function getGmailUrl(subject: string = "Consulta sobre pedido de gas - Línea Gas", body: string = ""): string {
  const email = site.contact.email.trim();
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  const mailto = `mailto:${email}${query}`;
  return `https://mail.google.com/mail/?extsrc=mailto&url=${encodeURIComponent(mailto)}`;
}
