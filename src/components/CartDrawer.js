import {Fragment} from 'react';
import {h} from '../lib/html';
import {money} from '../lib/utils';
import {PRODUCTS} from '../data/products';

export function CartDrawer({open,close,cart,setQty,subtotal,clear}){
  return h`<${Fragment}><div onClick=${close} className=${'fixed inset-0 z-50 bg-black/60 transition-opacity duration-500 '+(open?'opacity-100':'opacity-0 pointer-events-none')}></div>
  <aside role="dialog" aria-label="Cart" aria-hidden=${!open} className=${'fixed top-0 right-0 bottom-0 z-[60] w-full max-w-md bg-[var(--bg)] border-l border-[var(--line)] flex flex-col transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] '+(open?'translate-x-0 visible':'translate-x-full invisible')}>
    <div className="flex items-center justify-between p-6 border-b border-[var(--line)]"><h2 className="eyebrow text-[var(--ink)]">Your cart (${cart.reduce((a,c)=>a+c.qty,0)})</h2><button onClick=${close} aria-label="Close cart" className="p-2">✕</button></div>
    <div className="flex-1 overflow-y-auto p-6 space-y-6">${cart.length===0?h`<div className="text-sm"><p className="text-[var(--mut)]">Your cart is empty.</p><a href="#/shop" onClick=${close} className="btn btn-line mt-6">Shop the collection</a></div>`:cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return h`<div key=${c.id+c.v} className="flex gap-4"><img src=${p.images[0]} alt=${p.name} className="w-20 h-24 object-cover bg-[var(--panel)]"/>
      <div className="flex-1 text-sm"><div className="flex justify-between"><span>${p.name}</span><span>${money(p.price*c.qty)}</span></div><p className="text-[var(--mut)] text-xs mt-1">${c.v}</p>
      <div className="flex items-center justify-between mt-3"><span className="inline-flex items-center border border-[var(--line)]"><button className="w-8 h-8" aria-label="Decrease" onClick=${()=>setQty(c,c.qty-1)}>−</button><span className="w-7 text-center text-xs">${c.qty}</span><button className="w-8 h-8" aria-label="Increase" onClick=${()=>setQty(c,c.qty+1)}>+</button></span>
      <button onClick=${()=>setQty(c,0)} className="text-[10px] tracking-[.2em] uppercase text-[var(--mut)] hover:text-[var(--ink)]">Remove</button></div></div></div>`})}</div>
    <div className="p-6 border-t border-[var(--line)] space-y-4"><div className="flex justify-between text-sm"><span>Subtotal</span><span>${money(subtotal)}</span></div><p className="text-xs text-[var(--mut)]">Shipping and taxes calculated at checkout.</p><a href="#/checkout" onClick=${close} aria-disabled=${!cart.length} className=${'btn btn-solid w-full '+(cart.length?'':'opacity-40 pointer-events-none')}>Checkout</a><button onClick=${close} className="btn btn-line w-full">Continue shopping</button>${cart.length>0&&h`<button onClick=${clear} className="eyebrow w-full text-center py-2 hover:text-[var(--ink)]">Empty cart</button>`}</div></aside></${Fragment}>`;
}
