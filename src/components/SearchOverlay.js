import {useState,useEffect,useRef} from 'react';
import {h} from '../lib/html';
import {money} from '../lib/utils';
import {PRODUCTS} from '../data/products';

export function SearchOverlay({open,close}){
  const [q,setQ]=useState(''),ref=useRef();
  useEffect(()=>{if(open){setQ('');setTimeout(()=>ref.current&&ref.current.focus(),60)}},[open]);
  const t=q.trim().toLowerCase(),res=t?PRODUCTS.filter(p=>[p.name,p.cat,p.mat,...p.tags].join(' ').toLowerCase().includes(t)):[];
  return h`<div role="dialog" aria-label="Search" aria-modal="true" className=${'fixed inset-0 z-[70] bg-black/95 overflow-y-auto transition-all duration-500 '+(open?'opacity-100 visible':'opacity-0 invisible')}><div className="max-w-3xl mx-auto px-5 pt-6 pb-16"><div className="flex items-center gap-4 border-b border-[var(--line)] pb-4"><label className="sr-only" htmlFor="sq">Search products</label><input id="sq" ref=${ref} value=${q} onChange=${e=>setQ(e.target.value)} placeholder="Search rings, chains, everyday…" className="flex-1 min-w-0 bg-transparent text-xl md:text-3xl placeholder:text-[var(--mut)]"/><button onClick=${close} aria-label="Close search" className="p-3">✕</button></div>
  ${!t?h`<p className="eyebrow mt-8">Try “ring”, “everyday” or “stack”</p>`:res.length?h`<ul className="mt-6 divide-y divide-[var(--line)]">${res.map(p=>h`<li key=${p.id}><a href=${'#/product/'+p.slug} onClick=${close} className="flex items-center gap-4 py-4 hover:opacity-70"><img src=${p.images[0]} alt="" className="w-16 h-20 object-cover"/><span className="flex-1"><span className="block text-sm">${p.name}</span><span className="block text-xs text-[var(--mut)]">${p.cat}</span></span><span className="text-sm">${money(p.price)}</span></a></li>`)}</ul>`:h`<div className="mt-10"><p>No results for “${q}”.</p><a href="#/shop" onClick=${close} className="btn btn-line mt-6">Browse all</a></div>`}</div></div>`;
}
