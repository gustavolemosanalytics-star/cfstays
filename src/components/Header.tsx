"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8"
            >
              <rect width="32" height="32" rx="8" fill="#F43F5E" />
              <path
                d="M16 8L9 12l7 4 7-4-7-4zM9 20l7 4 7-4M9 16l7 4 7-4"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              Refúgio do Castelo
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
