import {h} from '../lib/html';
import {PRODUCTS} from '../data/products';
import {Reveal} from './Reveal';

const CATEGORIES = [
  ['Rings', 'ring'],
  ['Necklaces', 'chain'],
  ['Bracelets', 'bracelet'],
  ['Charms', 'pendant']
];

export function ShopByStyle(){
  return h`
    <section id="styles" className="max-w-[1500px] mx-auto px-5 md:px-10 py-24 md:py-40">
      
      <p className="eyebrow mb-8">Collections</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        ${CATEGORIES.map(([name, fallbackType], i) => {
          
          const product = PRODUCTS.find(
            p => p.cat?.toLowerCase() === name.toLowerCase()
          );

          const image = product?.images?.[0];

          return h`
            <${Reveal} key=${name}>
              <a
                href=${'#/shop/' + name.toLowerCase()}
                className="relative block aspect-[3/4] overflow-hidden zoom border border-[var(--line)]"
              >
                
                ${
                  image
                    ? h`
                      <img
                        src=${image}
                        alt=${name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    `
                    : h`
                      <div className="w-full h-full bg-[#111]"></div>
                    `
                }

                <div className="absolute inset-0 bg-black/25"></div>

                <span className="absolute bottom-4 left-4 text-xs tracking-[.28em] uppercase">
                  ${name}
                </span>

              </a>
            </${Reveal}>
          `;
        })}
      </div>
    </section>
  `;
}