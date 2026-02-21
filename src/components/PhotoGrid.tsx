"use client";

import Image from "next/image";

interface PhotoGridProps {
  images: string[];
  propertyName: string;
  onShowAll: () => void;
}

export default function PhotoGrid({
  images,
  propertyName,
  onShowAll,
}: PhotoGridProps) {
  const gridImages = images.slice(0, 5);

  return (
    <div className="relative">
      {/* Mobile: single image with counter */}
      <div className="sm:hidden relative aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src={gridImages[0]}
          alt={propertyName}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <button
          onClick={onShowAll}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-sm font-medium px-4 py-2 rounded-lg shadow-md"
        >
          Mostrar todas as fotos
        </button>
      </div>

      {/* Desktop: Airbnb-style 5-photo grid */}
      <div className="hidden sm:grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden aspect-[2.2/1]">
        <div
          className="col-span-2 row-span-2 relative cursor-pointer hover:brightness-90 transition-all"
          onClick={() => onShowAll()}
        >
          <Image
            src={gridImages[0]}
            alt={propertyName}
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        {gridImages.slice(1).map((img, i) => (
          <div
            key={i}
            className="relative cursor-pointer hover:brightness-90 transition-all"
            onClick={() => onShowAll()}
          >
            <Image
              src={img}
              alt={`${propertyName} - foto ${i + 2}`}
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        ))}
        <button
          onClick={onShowAll}
          className="absolute bottom-4 right-4 bg-white text-sm font-medium px-4 py-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Mostrar todas as fotos
        </button>
      </div>
    </div>
  );
}
