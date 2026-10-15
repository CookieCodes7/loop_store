import {h} from '../lib/html';
import {money} from '../lib/utils';
import {Wrap} from '../components/PageWrap';

export function OrderDone(){
  let o=null;try{o=JSON.parse(sessionStorage.getItem('loop_order'))}catch{}
  return h`<${Wrap} title="Thank you">${o?h`<div className="max-w-xl space-y-4"><p>Order <strong>${o.id}</strong> is confirmed.</p><p className="text-xs text-[var(--mut)]">Demo order: no payment was taken and no email was sent.</p><ul className="border-t border-[var(--line)] divide-y divide-[var(--line)] text-sm">${o.items.map((i,k)=>h`<li key=${k} className="flex justify-between py-3"><span>${i.name} · ${i.v} × ${i.qty}</span><span>${money(i.price*i.qty)}</span></li>`)}</ul><p className="text-right">Total ${money(o.total)}</p><a href="#/shop" className="btn btn-solid">Continue shopping</a></div>`:h`<p className="text-[var(--mut)]">No recent order found.</p>`}</${Wrap}>`;
}
