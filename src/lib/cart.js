import {PRODUCTS} from '../data/products';

export const loadCart=()=>{try{return JSON.parse(localStorage.getItem('loop_cart')||'[]').flatMap(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return p&&p.stock>0&&c.qty>0?[{id:c.id,v:c.v,qty:Math.min(c.qty,p.stock)}]:[]})}catch{return[]}};
