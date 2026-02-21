"use client";

import { property } from "@/data/properties";
import PhotoGrid from "@/components/PhotoGrid";
import PhotoModal from "@/components/PhotoModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-1">
          {property.name}
        </h1>
        <p className="text-sm text-gray-600 mb-4 flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{property.location}</span>
        </p>

        {/* Photo Grid */}
        <PhotoGrid
          images={property.images}
          propertyName={property.name}
          onShowAll={() => setShowModal(true)}
        />

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Casa inteira em {property.location}
              </h2>
              <p className="text-gray-600 mt-1">
                {property.guests} hóspedes · {property.suites} suítes ·{" "}
                {property.bathrooms} banheiros
              </p>
            </div>

            {/* Highlights */}
            <div className="border-b border-gray-200 py-6 space-y-4">
              {property.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-4">
                  <svg
                    className="w-6 h-6 text-rose-500 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 py-6">
              <h2 className="text-xl font-semibold mb-3">
                Sobre este espaço
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b border-gray-200 py-6">
              <h2 className="text-xl font-semibold mb-5">
                O que este lugar oferece
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <AmenityIcon name={amenity} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="py-6">
              <h2 className="text-xl font-semibold mb-2">
                Onde você vai estar
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {property.location}
              </p>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  className="w-full h-[300px] sm:h-[400px]"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.coordinates.lng - 0.015}%2C${property.coordinates.lat - 0.01}%2C${property.coordinates.lng + 0.015}%2C${property.coordinates.lat + 0.01}&layer=mapnik&marker=${property.coordinates.lat}%2C${property.coordinates.lng}`}
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Mapa da localização"
                />
              </div>
              <a
                href={`https://www.openstreetmap.org/?mlat=${property.coordinates.lat}&mlon=${property.coordinates.lng}#map=15/${property.coordinates.lat}/${property.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-medium text-gray-900 underline hover:text-gray-600 transition-colors"
              >
                Ver mapa maior
              </a>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 text-sm mb-5">
                Fale direto com o proprietário pelo WhatsApp para consultar datas e valores.
              </p>
              <a
                href={`https://wa.me/${property.whatsapp}?text=${encodeURIComponent("Olá! Tenho interesse no Refúgio do Castelo. Gostaria de saber sobre disponibilidade.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:bg-[#1da851] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Consultar disponibilidade
              </a>
              <p className="text-center text-xs text-gray-400 mt-3">
                Resposta rápida pelo WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        {property.videos.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold mb-5">Vídeos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.videos.map((video, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-xl overflow-hidden bg-black"
                >
                  <video
                    src={video}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      <PhotoModal
        images={property.images}
        videos={property.videos}
        propertyName={property.name}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

function AmenityIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    "Piscina com hidromassagem aquecida": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17.25V21h18v-3.75M3 17.25c1.5 0 2.25-.75 3-1.5s1.5-1.5 3-1.5 2.25.75 3 1.5 1.5 1.5 3 1.5 2.25-.75 3-1.5 1.5-1.5 3-1.5" /></svg>
    ),
    "Wi-Fi": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
    ),
    "Ar-condicionado": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>
    ),
    Estacionamento: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h4m-4 4h8M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>
    ),
    "Adega climatizada": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19V6m0 13c-2.21 0-4-1-4-3V6a4 4 0 118 0v10c0 2-1.79 3-4 3z" /></svg>
    ),
    "Painéis solares": (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
  };
  return (
    icons[name] || (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
    )
  );
}
