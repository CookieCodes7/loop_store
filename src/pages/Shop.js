import {useState} from 'react';
import {h} from '../lib/html';
import {FILTERS,PRODUCTS} from '../data/products';
import {ProductGrid} from '../components/ProductGrid';

export function Shop({cat,add}){
  const [sort,setSort]=useState('featured'),f=FILTERS.find(x=>x.toLowerCase()===cat)||'All';
  let items=PRODUCTS.filter(p=>f==='All'||p.cat===f||p.tags.includes(f.toLowerCase()));
  if(sort==='low')items=[...items].sort((a,b)=>a.price-b.price);if(sort==='high')items=[...items].sort((a,b)=>b.price-a.price);
  return h`<main className="page max-w-[1500px] mx-auto px-5 md:px-10 pt-32 pb-24 min-h-[70vh]"><h1 className="h1 text-5xl md:text-8xl">${f==='All'?'Shop':f}</h1>
  <div className="mt-10 mb-12 flex flex-wrap items-center justify-between gap-4 border-y border-[var(--line)] py-4"><nav aria-label="Filter products" className="flex gap-2 overflow-x-auto max-w-full">${FILTERS.map(x=>h`<a key=${x} href=${'#/shop'+(x==='All'?'':'/'+x.toLowerCase())} aria-current=${x===f?'page':undefined} className=${'shrink-0 px-4 h-11 inline-flex items-center text-[11px] tracking-[.2em] uppercase border '+(x===f?'bg-[var(--ink)] text-black border-[var(--ink)]':'border-[var(--line)] hover:border-[var(--mut)]')}>${x}</a>`)}</nav>
  <label className="text-xs text-[var(--mut)]">Sort<select value=${sort} onChange=${e=>setSort(e.target.value)} className="bg-black border border-[var(--line)] h-11 px-3 ml-2 text-[var(--ink)]"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div>
  ${items.length?h`<${ProductGrid} items=${items} add=${add}/>`:h`<p className="text-[var(--mut)]">No products here yet.</p>`}</main>`;
}
