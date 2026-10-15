import {useState} from 'react';
import {h} from '../lib/html';

export function useFields(init){const [v,setV]=useState(init);return [v,k=>x=>setV(s=>({...s,[k]:x}))]}

export function Field({id,label,value,set,error,area,type='text',auto}){
  const c='w-full bg-transparent border px-4 text-sm '+(error?'border-red-400/70':'border-[var(--line)]'),a={id,value,autoComplete:auto,onChange:e=>set(e.target.value),'aria-invalid':!!error,'aria-describedby':error?id+'-e':undefined};
  return h`<div><label htmlFor=${id} className="eyebrow block mb-2">${label}</label>${area?h`<textarea ...${a} rows="5" className=${c+' py-3'}/>`:h`<input ...${a} type=${type} className=${c+' h-12'}/>`}${error&&h`<p id=${id+'-e'} className="text-xs text-red-300 mt-1" role="alert">${error}</p>`}</div>`;
}
