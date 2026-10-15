import {h} from '../lib/html';
import {NewsForm} from './Newsletter';

export function Footer({home}){
  const col=(t,l)=>h`<nav aria-label=${t} className="space-y-2 text-[var(--mut)]"><p className="eyebrow text-[var(--ink)] mb-4">${t}</p>${l.map(([n,u])=>h`<a key=${n} href=${u} className="block hover:text-[var(--ink)] py-0.5">${n}</a>`)}</nav>`;
  return h`<footer className="border-t border-[var(--line)] px-5 md:px-10 pt-16 pb-28 md:pb-10"><div className="max-w-[1500px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm"><div><p className="text-xl font-semibold tracking-[.4em]">LOOP</p><p className="text-[var(--mut)] mt-3 max-w-[22ch]">Minimal accessories for everyday style.</p></div>${col('Explore',[['Shop','#/shop'],['Collections','#/collections'],['About','#/about'],['Contact','#/contact']])}${col('Help',[['Shipping','#/shipping'],['Returns','#/returns'],['Privacy Policy','#/privacy'],['Terms','#/terms']])}${col('Follow',[['Instagram','https://instagram.com/'],['hello@loop.store','mailto:hello@loop.store']])}</div>${!home&&h`<div className="max-w-[1500px] mx-auto mt-14"><p className="eyebrow text-[var(--ink)] mb-4">Stay in the loop.</p><${NewsForm}/></div>`}<p className="max-w-[1500px] mx-auto mt-14 text-xs text-[var(--mut)]">© 2026 LOOP. All rights reserved.</p></footer>`;
}
