import {useState} from 'react';
import {h} from '../lib/html';
import {money,SHIP_FREE,SHIP_FLAT,EMAIL} from '../lib/utils';
import {PRODUCTS} from '../data/products';
import {createOrder} from '../lib/services';
import {Wrap} from '../components/PageWrap';
import {useFields,Field} from '../components/Field';

export function Checkout({cart,subtotal,done}){
  const items=cart.map(c=>({...c,p:PRODUCTS.find(x=>x.id===c.id)}));
  const [v,set]=useFields({email:'',name:'',phone:'',address:'',city:'',zip:'',country:'India'}),[err,setErr]=useState({}),[st,setSt]=useState('idle');
  const ship=subtotal>=SHIP_FREE?0:SHIP_FLAT,total=subtotal+ship;
  if(!items.length)return h`<${Wrap} title="Checkout"><p className="text-[var(--mut)]">Your cart is empty.</p><a href="#/shop" className="btn btn-solid mt-8">Continue shopping</a></${Wrap}>`;
  const sub=async e=>{e.preventDefault();const x={};if(!EMAIL.test(v.email))x.email='Enter a valid email address.';['name','address','city','zip','country'].forEach(k=>{if(!v[k].trim())x[k]='Required.'});setErr(x);if(Object.keys(x).length)return;setSt('loading');
    try{const o=await createOrder({customer:v,items:items.map(i=>({id:i.id,qty:i.qty,variant:i.v})),subtotal,ship,total});done({id:o.id,email:v.email,total,items:items.map(i=>({name:i.p.name,v:i.v,qty:i.qty,price:i.p.price}))})}catch{setSt('error')}};
  const F=(id,label,k,o={})=>h`<${Field} id=${'k-'+id} label=${label} value=${v[k]} set=${set(k)} error=${err[k]} ...${o}/>`;
  return h`<${Wrap} title="Checkout"><form onSubmit=${sub} noValidate className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20"><div className="space-y-10">
    <fieldset className="space-y-5"><legend className="eyebrow text-[var(--ink)] mb-5">Customer</legend>${F('email','Email','email',{type:'email',auto:'email'})}${F('name','Full name','name',{auto:'name'})}${F('phone','Phone (optional)','phone',{type:'tel',auto:'tel'})}</fieldset>
    <fieldset className="space-y-5"><legend className="eyebrow text-[var(--ink)] mb-5">Shipping</legend>${F('addr','Address','address',{auto:'street-address'})}<div className="grid sm:grid-cols-2 gap-5">${F('city','City','city',{auto:'address-level2'})}${F('zip','Postal code','zip',{auto:'postal-code'})}</div>${F('country','Country','country',{auto:'country-name'})}</fieldset>
    <fieldset><legend className="eyebrow text-[var(--ink)] mb-5">Payment</legend><div className="border border-[var(--line)] p-5 text-sm text-[var(--mut)]">Demo mode: no card is charged. Payment fields appear here once a provider such as Stripe or Razorpay is connected in <code>createOrder()</code>.</div></fieldset></div>
    <aside aria-label="Order summary" className="lg:sticky lg:top-24 self-start border border-[var(--line)] p-6 space-y-5"><h2 className="eyebrow text-[var(--ink)]">Order summary</h2><ul className="space-y-4">${items.map(i=>h`<li key=${i.id+i.v} className="flex gap-4 text-sm"><img src=${i.p.images[0]} alt=${i.p.name} className="w-14 h-16 object-cover"/><span className="flex-1">${i.p.name}<span className="block text-xs text-[var(--mut)]">${i.v} × ${i.qty}</span></span><span>${money(i.p.price*i.qty)}</span></li>`)}</ul>
    <dl className="text-sm space-y-2 border-t border-[var(--line)] pt-4"><div className="flex justify-between"><dt>Subtotal</dt><dd>${money(subtotal)}</dd></div><div className="flex justify-between"><dt>Shipping</dt><dd>${ship?money(ship):'Free'}</dd></div><div className="flex justify-between text-base pt-2"><dt>Total</dt><dd>${money(total)}</dd></div></dl>
    ${st==='error'&&h`<p role="alert" className="text-sm text-red-300">We couldn't place your order. Please try again.</p>`}<button className="btn btn-solid w-full" disabled=${st==='loading'}>${st==='loading'?'Placing order…':'Place order'}</button></aside></form></${Wrap}>`;
}
