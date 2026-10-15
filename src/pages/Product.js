import {useState,useEffect} from 'react';
import {h} from '../lib/html';
import {money} from '../lib/utils';
import {PRODUCTS} from '../data/products';
import {ProductGrid} from '../components/ProductGrid';
import {Qty,Variants} from '../components/ProductControls';

export function ProductPage({p,add}){
  const [q,setQ]=useState(1),[v,setV]=useState(p.variants[0]);
  const rel=PRODUCTS.filter(x=>x.id!==p.id).sort((a,b)=>(b.cat===p.cat)-(a.cat===p.cat)).slice(0,3);
  useEffect(()=>{scrollTo(0,0)},[p.id]);
  return h`<main className="page pt-16"><div className="max-w-[1500px] mx-auto md:grid md:grid-cols-[1.4fr_1fr]">
    <div className="snap flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible gap-px bg-[var(--line)]" aria-label="Gallery">${[...p.images,...p.images].map((im,i)=>h`<img key=${i} src=${im} alt=${p.name+' view '+(i+1)} className="w-full md:w-auto shrink-0 md:shrink aspect-[4/5] object-cover"/>`)}</div>
    <div className="p-6 md:p-14 md:sticky md:top-16 md:self-start space-y-7"><a href="#/shop" className="eyebrow hover:text-[var(--ink)]">← Shop</a>
      <div><h1 className="h1 text-5xl md:text-6xl">${p.name}</h1><p className="mt-3 text-xl">${money(p.price)}</p></div>
      <p className="text-[var(--mut)] leading-relaxed">${p.desc}</p><p className="text-xs tracking-wider uppercase text-[var(--mut)]">${p.mat}${p.dim?' · '+p.dim:''}</p><p className="text-xs text-[var(--mut)]">${p.stock<1?'Currently sold out':p.stock<5?'Only '+p.stock+' left':'In stock'}</p>
      <${Variants} p=${p} v=${v} setV=${setV}/><${Qty} q=${q} setQ=${setQ} max=${Math.max(1,p.stock)}/>
      <div className="grid gap-3"><button className="btn btn-solid disabled:opacity-40" disabled=${p.stock<1} onClick=${()=>add(p,q,v)}>${p.stock<1?'Sold out':'Add to cart'}</button><button className="btn btn-line disabled:opacity-40" disabled=${p.stock<1} onClick=${()=>{add(p,q,v,false);location.hash='#/checkout'}}>Buy now</button></div>
      <div className="border-t border-[var(--line)] text-sm">${[['Shipping','Free standard shipping over $75. Orders dispatch in 1–2 working days.'],['Returns','30-day returns on unworn pieces in original packaging.']].map(([t,d])=>h`<details key=${t} className="border-b border-[var(--line)] py-4"><summary className="cursor-pointer eyebrow text-[var(--ink)]">${t}</summary><p className="mt-3 text-[var(--mut)]">${d}</p></details>`)}</div></div></div>
    <section className="max-w-[1500px] mx-auto px-5 md:px-10 py-24"><h2 className="h1 text-3xl md:text-5xl mb-10">You may also like</h2><${ProductGrid} items=${rel} add=${add}/></section>
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-black/95 border-t border-[var(--line)] p-3 flex items-center gap-3" style=${{paddingBottom:'calc(.75rem + env(safe-area-inset-bottom,0px))'}}><span className="pl-2 text-sm">${money(p.price*q)}</span><button className="btn btn-solid flex-1 !py-3 disabled:opacity-40" disabled=${p.stock<1} onClick=${()=>add(p,q,v)}>${p.stock<1?'Sold out':'Add to cart'}</button></div></main>`;
}
