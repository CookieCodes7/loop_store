import {h} from '../lib/html';
import {PRODUCTS} from '../data/products';

export function Social(){
  return h`<section className="px-5 md:px-10 pb-24 md:pb-40 max-w-[1500px] mx-auto"><div className="flex items-end justify-between mb-10 flex-wrap gap-4"><div><h2 className="h1 text-4xl md:text-6xl">Follow the loop</h2><p className="eyebrow mt-3">@loop.accessories</p></div><a href="https://instagram.com/" className="btn btn-line">Follow us</a></div>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-3">${[...PRODUCTS].reverse().map((p,i)=>h`<a key=${p.id} href="https://instagram.com/" aria-label=${'Instagram post '+(i+1)} className="zoom block overflow-hidden aspect-square"><img src=${p.images[i%2]} alt="" loading="lazy" className="w-full h-full object-cover"/></a>`)}</div></section>`;
}
