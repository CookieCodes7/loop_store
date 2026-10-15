import {h} from '../lib/html';
import {money} from '../lib/utils';

export function ProductCard({p,add}){
  return h`
    <article className="group">

      <a
        href=${'#/product/'+p.slug}
        className="block relative aspect-[4/5] bg-[var(--panel)] overflow-hidden zoom"
        aria-label=${p.name}
      >

        <img
          src=${p.images[0]}
          alt=${p.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

      </a>

      <div className="flex items-start justify-between pt-4 gap-4">

        <div>
          <h3 className="text-sm tracking-wide">
            ${p.name}
          </h3>

          <p className="text-sm text-[var(--mut)] mt-1">
            ${money(p.price)}
          </p>
        </div>

        <button
          disabled=${p.stock < 1}
          onClick=${()=>add(p)}
          className="disabled:opacity-40 text-[10px] tracking-[.22em] uppercase border-b border-[var(--mut)] pb-0.5 hover:border-[var(--ink)] transition-colors py-1"
        >
          ${p.stock < 1 ? 'Sold out' : 'Quick add'}
        </button>

      </div>

    </article>
  `;
}