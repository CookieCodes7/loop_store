import {h} from '../lib/html';
import {Reveal} from './Reveal';
import {ProductCard} from './ProductCard';

export function ProductGrid({items,add}){return h`<div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">${items.map(p=>h`<${Reveal} key=${p.id}><${ProductCard} p=${p} add=${add}/></${Reveal}>`)}</div>`}
