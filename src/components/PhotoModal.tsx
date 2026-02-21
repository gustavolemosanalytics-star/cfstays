"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface PhotoModalProps {
  images: string[];
  videos: string[];
  propertyName: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function PhotoModal({
  images,
  videos,
  propertyName,
  isOpen,
  onClose,
  initialIndex = 0,
}: PhotoModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showGallery, setShowGallery] = useState(true);
  const totalItems = images.length + videos.length;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    },
    [isOpen, onClose, totalItems]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  const isVideo = currentIndex >= images.length;
  const currentSrc = isVideo
    ? videos[currentIndex - images.length]
    : images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-white">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </button>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {totalItems}
        </span>
        <button
          onClick={() => setShowGallery(!showGallery)}
          className="text-sm font-medium hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
        >
          {showGallery ? "Slideshow" : "Grade"}
        </button>
      </div>

      {showGallery ? (
        /* Gallery View */
        <div className="pt-14 pb-4 px-4 h-full overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-2">
            {images.map((img, i) => (
              <div key={`img-${i}`} className="relative w-full aspect-[4/3]">
                <Image
                  src={img}
                  alt={`${propertyName} - foto ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            ))}
            {videos.map((vid, i) => (
              <div key={`vid-${i}`} className="relative w-full aspect-video">
                <video
                  src={vid}
                  controls
                  playsInline
                  className="w-full h-full rounded-lg bg-black"
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Slideshow View */
        <div className="flex items-center justify-center h-full pt-14 pb-4 px-4">
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + totalItems) % totalItems
              )
            }
            className="absolute left-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="relative w-full max-w-4xl aspect-[4/3] mx-16">
            {isVideo ? (
              <video
                key={currentSrc}
                src={currentSrc}
                controls
                playsInline
                autoPlay
                className="w-full h-full object-contain rounded-lg bg-black"
              />
            ) : (
              <Image
                key={currentSrc}
                src={currentSrc}
                alt={`${propertyName} - ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            )}
          </div>

          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % totalItems)
            }
            className="absolute right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Próxima"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
