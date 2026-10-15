import {h} from '../lib/html';

export function Qty({q,setQ,max=99}){return h`<div className="inline-flex items-center border border-[var(--line)]" role="group" aria-label="Quantity">
  <button aria-label="Decrease" className="w-11 h-11" onClick=${()=>setQ(Math.max(1,q-1))}>−</button><span className="w-10 text-center text-sm" aria-live="polite">${q}</span><button aria-label="Increase" className="w-11 h-11" onClick=${()=>setQ(Math.min(max,q+1))}>+</button></div>`}

export function Variants({p,v,setV}){return h`<div role="radiogroup" aria-label="Variant" className="flex flex-wrap gap-2">${p.variants.map(x=>h`<button key=${x} role="radio" aria-checked=${v===x} onClick=${()=>setV(x)} className=${'min-w-12 h-11 px-4 text-xs border transition-colors '+(v===x?'bg-[var(--ink)] text-black border-[var(--ink)]':'border-[var(--line)] hover:border-[var(--mut)]')}>${x}</button>`)}</div>`}
