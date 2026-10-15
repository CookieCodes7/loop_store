import {h} from '../lib/html';
import {PRODUCTS} from '../data/products';
import {Hero} from '../components/Hero';
import {CollectionSection} from '../components/CollectionSection';
import {Statement} from '../components/Statement';
import {ShopByStyle} from '../components/ShopByStyle';
import {ProductShowcase} from '../components/ProductShowcase';
import {Why} from '../components/Why';
import {Social} from '../components/Social';
import {Newsletter} from '../components/Newsletter';

export const Home = ({add}) => h`<main className="page"><${Hero}/><${CollectionSection} add=${add}/><${Statement}/><${ShopByStyle}/><${ProductShowcase} p=${PRODUCTS.find(p=>p.featured)} add=${add}/><${Why}/><${Social}/><${Newsletter}/></main>`;
