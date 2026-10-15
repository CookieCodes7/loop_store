import {useState} from 'react';
import {h} from '../lib/html';
import {money} from '../lib/utils';
import {Reveal} from './Reveal';
import {Qty,Variants} from './ProductControls';

export function ProductShowcase({p,add}){
  const [q,setQ]=useState(1),[v,setV]=useState(p.variants[0]);
  return h`<section className="border-y border-[var(--line)]"><div className="max-w-[1500px] mx-auto grid md:grid-cols-2">
    <div className="grid grid-cols-2 md:grid-cols-1 gap-px bg-[var(--line)]"><a href=${'#/product/'+p.slug} className="zoom block overflow-hidden"><img src=${p.images[0]} alt=${p.name} loading="lazy" className="w-full aspect-square md:aspect-[4/5] object-cover"/></a><div className="hidden md:block zoom overflow-hidden"><img src=${p.images[1]} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover"/></div></div>
    <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center p-6 md:p-16 lg:p-24"><${Reveal}>
      <p className="eyebrow mb-4">Featured piece</p><h2 className="h1 text-5xl md:text-7xl">${p.name}</h2><p className="mt-4 text-xl">${money(p.price)}</p>
      <p className="mt-6 text-[var(--mut)] max-w-sm leading-relaxed">${p.desc}</p><p className="mt-4 text-xs tracking-wider uppercase text-[var(--mut)]">Material — ${p.mat}</p>
      <div className="mt-8 space-y-6"><${Variants} p=${p} v=${v} setV=${setV}/><div className="flex gap-3 flex-wrap"><${Qty} q=${q} setQ=${setQ} max=${Math.max(1,p.stock)}/><button className="btn btn-solid flex-1" onClick=${()=>add(p,q,v)}>Add to cart</button></div></div></${Reveal}></div></div></section>`;
}
