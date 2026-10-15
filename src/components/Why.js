import {h} from '../lib/html';
import {Reveal} from './Reveal';

export function Why(){
  const it=[['Minimal design','Designed to work with everyday outfits.'],['Everyday wear','Pieces made to become part of your daily style.'],['Built for your style','Wear them individually or stack them together.']];
  return h`<section className="max-w-[1500px] mx-auto px-5 md:px-10 py-24 md:py-40 grid md:grid-cols-3 gap-12 md:gap-0">${it.map(([t,d],i)=>h`<${Reveal} key=${t} className="md:px-10 md:border-l border-[var(--line)] first:border-0"><p className="eyebrow">0${i+1}</p><h3 className="h1 text-2xl mt-6">${t}</h3><p className="text-[var(--mut)] mt-3 max-w-[26ch]">${d}</p></${Reveal}>`)}</section>`;
}
