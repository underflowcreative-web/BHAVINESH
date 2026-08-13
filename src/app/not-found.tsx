import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center section-padding text-center">
      {/* Subtle grain */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="grain404">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain404)" />
        </svg>
      </div>

      {/* Big 404 */}
      <h1
        className="text-[clamp(8rem,25vw,20rem)] font-display leading-none text-white/[0.04] select-none"
        aria-hidden="true"
      >
        404
      </h1>

      {/* Message */}
      <div className="relative -mt-16 md:-mt-24">
        <p className="text-editorial text-[#e8e4df] mb-4">
          Looks like this moment
          <br />
          wasn&apos;t captured.
        </p>
        <p className="text-body-lg max-w-md mx-auto mb-12">
          The page you&apos;re looking for seems to have disappeared — much like a perfect candid moment
          that slipped through the lens.
        </p>

        <Link
          href="/"
          className="inline-block uppercase tracking-[0.25em] font-heading text-sm border border-white/20 hover:border-bronze hover:text-bronze px-10 py-5 transition-all duration-500"
        >
          GO HOME
        </Link>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 text-label text-stone/30">
        BHAVINESH BHARATHAN PHOTOGRAPHY
      </div>
    </div>
  );
}
