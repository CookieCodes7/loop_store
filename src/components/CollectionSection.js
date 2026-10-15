import {h} from '../lib/html';
import {PRODUCTS} from '../data/products';
import {ProductGrid} from './ProductGrid';

export function CollectionSection({add}){
  return h`<section id="shop" className="max-w-[1500px] mx-auto px-5 md:px-10 py-24 md:py-40">
    <div className="flex items-end justify-between mb-14"><h2 className="h1 text-5xl md:text-8xl">The Collection</h2><a href="#/shop" className="eyebrow hidden md:block hover:text-[var(--ink)]">View all (${PRODUCTS.length})</a></div>
    <${ProductGrid} items=${PRODUCTS} add=${add}/></section>`;
}
