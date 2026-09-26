import { useState } from 'react';
import { X } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/hadescore_pvt_ltd_off?stkn=bzM3YWlwNHZkbjV2';
const LINKEDIN_URL = 'https://www.linkedin.com/company/hadescore-pvt/';

export function FloatingInstagramButton() {
  const [isLinkedInPopupOpen, setIsLinkedInPopupOpen] = useState(true);
  const [isInstagramPopupOpen, setIsInstagramPopupOpen] = useState(true);

  return (
    <aside
      aria-label="Social follow widgets"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex flex-col items-end gap-2 pointer-events-auto select-none"
    >
      {/* ── ROW 1: LINKEDIN ── */}
      <div className="flex items-center gap-2">
        {/* Compact Speech Bubble for LinkedIn */}
        {isLinkedInPopupOpen && (
          <div
            onClick={() => window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer')}
            className="relative px-3 py-2 rounded-xl bg-[#070b14]/95 backdrop-blur-md border border-blue-500/35 shadow-xl shadow-black/80 hover:border-blue-500/60 transition-all duration-200 cursor-pointer group animate-in fade-in slide-in-from-right-2 flex items-center"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer');
            }}
          >
            {/* Headline Message */}
            <p className="text-white font-bold text-xs sm:text-[13px] leading-tight pr-5 group-hover:text-sky-100 transition-colors whitespace-nowrap">
              Follow us on LinkedIn
            </p>

            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLinkedInPopupOpen(false);
              }}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              title="Dismiss"
              aria-label="Close LinkedIn popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Official Modern LinkedIn Squircle Button */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Hadescore PVT LTD on LinkedIn"
          title="Follow Hadescore on LinkedIn"
          className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] sm:rounded-[16px] bg-[#0A66C2] hover:bg-[#004182] shadow-lg shadow-blue-600/35 hover:shadow-blue-500/60 hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden group focus:outline-none shrink-0 border border-white/15"
        >
          {/* Subtle Pulse Effect */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-[14px] sm:rounded-[16px] bg-sky-400 opacity-20 pointer-events-none"></span>

          {/* Official Updated LinkedIn 'in' SVG Glyph */}
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
        </a>
      </div>

      {/* ── ROW 2: INSTAGRAM ── */}
      <div className="flex items-center gap-2">
        {/* Compact Speech Bubble for Instagram */}
        {isInstagramPopupOpen && (
          <div
            onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
            className="relative px-3 py-2 rounded-xl bg-[#070b14]/95 backdrop-blur-md border border-pink-500/35 shadow-xl shadow-black/80 hover:border-pink-500/60 transition-all duration-200 cursor-pointer group animate-in fade-in slide-in-from-right-2 flex items-center"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
            }}
          >
            {/* Headline Message */}
            <p className="text-white font-bold text-xs sm:text-[13px] leading-tight pr-5 group-hover:text-pink-100 transition-colors whitespace-nowrap">
              Follow us on Instagram
            </p>

            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsInstagramPopupOpen(false);
              }}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              title="Dismiss"
              aria-label="Close Instagram popup"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Official Modern Instagram App Squircle Icon Button */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Hadescore on Instagram"
          title="Follow Hadescore on Instagram"
          className="relative block w-10 h-10 sm:w-11 sm:h-11 rounded-[14px] sm:rounded-[16px] shadow-lg shadow-pink-600/35 hover:shadow-pink-500/60 hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden group focus:outline-none shrink-0 border border-white/15"
        >
          {/* Official 2022+ Instagram Dynamic Living Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(220deg, #4f5bd5 0%, #962fbf 30%, #d62976 55%, #fa7e1e 80%, #feda75 100%)',
            }}
          />

          {/* Official Radial Warm Yellow Glow from Bottom-Left */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 10% 105%, #ffd600 0%, #ff6900 35%, rgba(255, 0, 105, 0) 70%)',
            }}
          />

          {/* Official Radial Royal Blue Glow from Top-Right */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 90% 10%, #3771c8 0%, rgba(102, 0, 255, 0) 60%)',
            }}
          />

          {/* Subtle Outer Ping Effect */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-[14px] sm:rounded-[16px] bg-pink-400 opacity-20 pointer-events-none"></span>

          {/* Official Meta Instagram Vector Glyph */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-2.5">
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full text-white fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </a>
      </div>
    </aside>
  );
}
