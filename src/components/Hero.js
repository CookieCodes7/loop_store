import {h} from '../lib/html';

export function Hero(){
  return h`
    <section className="relative min-h-[100svh] flex items-end overflow-hidden border-b border-[var(--line)]">

      <img
        src="/images/products/dragon-ring.jpg"
        alt="LOOP Dragon Ring"
        className="absolute right-[-15%] md:right-0 top-0 h-full w-[130%] md:w-[60%] object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>

      <div className="relative max-w-[1500px] mx-auto w-full px-5 md:px-10 pb-16 md:pb-24 pt-32">

        <p className="eyebrow mb-6">
          New · Season 01
        </p>

        <h1 className="h1 text-[clamp(3rem,10.5vw,10rem)] max-w-[11ch]">
          Accessories that complete the look.
        </h1>

        <p className="mt-8 text-[var(--mut)] max-w-sm">
          Statement pieces designed to make the details matter.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#/shop"
            className="btn btn-solid"
          >
            Shop Collection
          </a>

          <a
            href="#/about"
            className="btn btn-line"
          >
            Explore LOOP
          </a>

        </div>

      </div>

    </section>
  `;
}