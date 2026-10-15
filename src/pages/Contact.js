import {useState} from 'react';
import {h} from '../lib/html';
import {EMAIL} from '../lib/utils';
import {sendMessage} from '../lib/services';
import {Wrap} from '../components/PageWrap';
import {useFields,Field} from '../components/Field';

export function Contact(){
  const [v,set]=useFields({name:'',email:'',message:''}),[err,setErr]=useState({}),[st,setSt]=useState('idle');
  const sub=async e=>{e.preventDefault();const x={};if(!v.name.trim())x.name='Please enter your name.';if(!EMAIL.test(v.email))x.email='Enter a valid email address.';if(v.message.trim().length<10)x.message='Message should be at least 10 characters.';setErr(x);if(Object.keys(x).length)return;setSt('loading');try{await sendMessage(v);setSt('done')}catch{setSt('error')}};
  return h`<${Wrap} title="Contact"><div className="grid md:grid-cols-[1fr_1.4fr] gap-14"><div className="space-y-4 text-sm"><p className="text-[var(--mut)] max-w-xs">Questions about an order or a piece? We reply within 1–2 working days.</p><p><a href="mailto:hello@loop.store" className="underline underline-offset-4">hello@loop.store</a></p><p><a href="https://instagram.com/" className="underline underline-offset-4">Instagram</a></p></div>
  ${st==='done'?h`<p role="status" className="text-lg">Thank you. Your message has been sent.</p>`:h`<form onSubmit=${sub} noValidate className="space-y-5"><${Field} id="c-name" label="Name" auto="name" value=${v.name} set=${set('name')} error=${err.name}/><${Field} id="c-email" label="Email" type="email" auto="email" value=${v.email} set=${set('email')} error=${err.email}/><${Field} id="c-msg" label="Message" area=${true} value=${v.message} set=${set('message')} error=${err.message}/>${st==='error'&&h`<p role="alert" className="text-sm text-red-300">We couldn't send your message. Please try again or email us.</p>`}<button className="btn btn-solid" disabled=${st==='loading'}>${st==='loading'?'Sending…':'Send message'}</button></form>`}</div></${Wrap}>`;
}
