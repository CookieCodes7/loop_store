import {useState,useEffect,useRef} from 'react';
import {h} from '../lib/html';

export function Reveal({children,className=''}){
  const r=useRef(),[s,set]=useState(false);
  useEffect(()=>{const o=new IntersectionObserver(e=>{if(e[0].isIntersecting){set(true);o.disconnect()}},{threshold:.12});o.observe(r.current);return()=>o.disconnect()},[]);
  return h`<div ref=${r} className=${'rv '+(s?'in ':'')+className}>${children}</div>`;
}
