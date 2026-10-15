import {useState,useEffect} from 'react';
import {h} from '../lib/html';
import {Icon} from './Icon';

export function Navbar({count,openCart,openSearch}){
  const [sc,setSc]=useState(false),[menu,setMenu]=useState(false);
  useEffect(()=>{const f=()=>setSc(scrollY>40);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
  const links=[['Shop','#/shop'],['Collections','#/collections'],['About','#/about'],['Contact','#/contact']];
  return h`<header className=${'fixed top-0 inset-x-0 z-40 transition-all duration-500 '+(sc?'bg-black/90 backdrop-blur border-b border-[var(--line)]':'bg-transparent')} style=${{paddingTop:'env(safe-area-inset-top,0px)'}}>
    <nav className="max-w-[1500px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between" aria-label="Main">
      <button className="md:hidden p-2 -ml-2" aria-label="Open menu" onClick=${()=>setMenu(true)}><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3"><path d="M3 8h18M3 16h18"/></svg></button>
      <ul className="hidden md:flex gap-9 text-[11px] tracking-[.24em] uppercase flex-1">${links.map(([t,u])=>h`<li key=${t}><a href=${u} className="hover:text-[var(--mut)] transition-colors">${t}</a></li>`)}</ul>
      <a href="#/" className="text-xl font-semibold tracking-[.4em] md:absolute md:left-1/2 md:-translate-x-1/2">LOOP</a>
      <div className="flex items-center flex-1 justify-end">
        <${Icon} label="Search" onClick=${openSearch} d=${h`<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>`}/>
        <${Icon} label="Cart" badge=${count} onClick=${openCart} d=${h`<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 016 0"/>`}/>
      </div>
    </nav>
    <div className=${'fixed inset-0 bg-black z-50 flex flex-col px-6 py-6 transition-all duration-500 '+(menu?'opacity-100 visible':'opacity-0 invisible')} role="dialog" aria-label="Menu">
      <div className="flex justify-between items-center h-12"><span className="text-xl font-semibold tracking-[.4em]">LOOP</span><button aria-label="Close menu" onClick=${()=>setMenu(false)} className="p-2 text-2xl font-light">✕</button></div>
      <ul className="mt-16 space-y-6">${links.map(([t,u])=>h`<li key=${t}><a href=${u} onClick=${()=>setMenu(false)} className="h1 text-5xl block">${t}</a></li>`)}</ul>
    </div></header>`;
}
