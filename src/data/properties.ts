export interface Property {
  slug: string;
  name: string;
  location: string;
  description: string;
  highlights: string[];
  guests: number;
  suites: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  videos: string[];
  coverImage: string;
  whatsapp: string;
  coordinates: { lat: number; lng: number };
}

export const property: Property = {
  slug: "refugio-do-castelo",
  name: "Refúgio do Castelo",
  location: "Praia do Forte — Condomínio Praia do Castelo",
  description:
    "6 suítes sociais, sendo 1 master com 2 banheiros, adega climatizada com 12m², sala, cozinha, paisagismo interno e externo, piscina com hidromassagem aquecida com 52m², 120m² de deck, dois depósitos, área de serviço coberta e descoberta e suíte de funcionários.",
  highlights: [
    "6 suítes sociais (1 master com 2 banheiros)",
    "Piscina com hidromassagem aquecida — 52m²",
    "120m² de deck",
    "Adega climatizada — 12m²",
    "Suíte de funcionários",
  ],
  guests: 12,
  suites: 6,
  bathrooms: 7,
  amenities: [
    "Piscina com hidromassagem aquecida",
    "Deck de 120m²",
    "Adega climatizada",
    "Ar-condicionado",
    "Wi-Fi",
    "TV em todos os quartos",
    "Painéis solares",
    "Estacionamento",
    "Cozinha completa",
    "Paisagismo interno e externo",
    "Closets planejados",
    "Área de serviço",
  ],
  images: Array.from({ length: 27 }, (_, i) =>
    `/properties/refugio-do-castelo/foto-${String(i + 1).padStart(2, "0")}.jpg`
  ),
  videos: Array.from({ length: 4 }, (_, i) =>
    `/properties/refugio-do-castelo/video-${String(i + 1).padStart(2, "0")}.mp4`
  ),
  coverImage: "/properties/refugio-do-castelo/foto-25.jpg",
  whatsapp: "5571999999999",
  coordinates: { lat: -12.5630, lng: -37.9930 },
};
