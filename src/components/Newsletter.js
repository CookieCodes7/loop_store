import {useState} from 'react';
import {h} from '../lib/html';
import {EMAIL} from '../lib/utils';
import {Reveal} from './Reveal';
import {subscribe} from '../lib/services';

export function NewsForm(){
  const [e,setE]=useState(''),[st,setSt]=useState('idle'),[err,setErr]=useState('');
  const sub=async ev=>{ev.preventDefault();if(!EMAIL.test(e)){setErr('Enter a valid email address.');return}setErr('');setSt('loading');try{await subscribe(e);setSt('done')}catch{setSt('idle');setErr('Something went wrong. Please try again.')}};
  if(st==='done')return h`<p className="eyebrow" role="status">Thank you. You're in.</p>`;
  return h`<form onSubmit=${sub} noValidate className="flex flex-col sm:flex-row gap-3 w-full max-w-md"><label className="sr-only" htmlFor="nl-email">Email address</label><input id="nl-email" type="email" value=${e} onChange=${x=>setE(x.target.value)} placeholder="Email address" aria-invalid=${!!err} className="flex-1 bg-transparent border border-[var(--line)] px-5 h-[52px] text-sm placeholder:text-[var(--mut)]"/><button className="btn btn-solid" disabled=${st==='loading'}>${st==='loading'?'Sending…':'Subscribe'}</button>${err&&h`<p className="text-xs text-red-300 sm:basis-full" role="alert">${err}</p>`}</form>`;
}

export function Newsletter(){
  return h`<section className="border-t border-[var(--line)] py-28 md:py-40 px-5 text-center"><${Reveal}><h2 className="h1 text-5xl md:text-8xl">Stay in the loop.</h2><p className="text-[var(--mut)] mt-6 max-w-md mx-auto">Get first access to new drops, exclusive pieces and special offers.</p><div className="mt-10 flex justify-center"><${NewsForm}/></div></${Reveal}></section>`;
}
