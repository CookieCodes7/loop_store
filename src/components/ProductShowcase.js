import { useState } from 'react';
import { h } from '../lib/html';
import { money } from '../lib/utils';
import { Reveal } from './Reveal';
import { Qty } from './ProductControls';

export function ProductShowcase({ p, add }) {
  if (!p) return null;

  const [q, setQ] = useState(1);

  return h`
    <section className="border-y border-[var(--line)]">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2">

        <div className="grid grid-cols-2 md:grid-cols-1 gap-px bg-[var(--line)]">

          <a
            href=${'#/product/' + p.slug}
            className="zoom block overflow-hidden"
          >
            <img
              src=${p.images?.[0]}
              alt=${p.name}
              loading="lazy"
              className="w-full aspect-square md:aspect-[4/5] object-cover"
            />
          </a>

          <div className="hidden md:block zoom overflow-hidden">
            <img
              src=${p.images?.[1] || p.images?.[0]}
              alt=""
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

        </div>

        <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center p-6 md:p-16 lg:p-24">

          <${Reveal}>

            <p className="eyebrow mb-4">
              Featured piece
            </p>

            <h2 className="h1 text-5xl md:text-7xl">
              ${p.name}
            </h2>

            <p className="mt-4 text-xl">
              ${money(p.price)}
            </p>

            <p className="mt-6 text-[var(--mut)] max-w-sm leading-relaxed">
              ${p.desc || p.description || ''}
            </p>

            ${
              p.mat
                ? h`
                    <p className="mt-4 text-xs tracking-wider uppercase text-[var(--mut)]">
                      Material — ${p.mat}
                    </p>
                  `
                : ''
            }

            <div className="mt-8 space-y-6">

              <div className="flex gap-3 flex-wrap">

                <${Qty}
                  q=${q}
                  setQ=${setQ}
                  max=${Math.max(1, p.stock || 1)}
                />

                <button
                  className="btn btn-solid flex-1"
                  disabled=${!p.stock || p.stock < 1}
                  onClick=${() => add(p, q, null)}
                >
                  ${!p.stock || p.stock < 1 ? 'Sold out' : 'Add to cart'}
                </button>

              </div>

              <a
                href=${'#/product/' + p.slug}
                className="btn btn-line w-full text-center block"
              >
                View product
              </a>

            </div>

          </${Reveal}>

        </div>

      </div>
    </section>
  `;
}