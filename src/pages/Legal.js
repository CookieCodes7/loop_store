import {h} from '../lib/html';
import {Wrap} from '../components/PageWrap';

export const LEGAL={shipping:['Shipping','Free standard shipping on orders over $75, otherwise $6. Orders dispatch within 1–2 working days and usually arrive in 3–7 working days.'],returns:['Returns','Unworn pieces in their original packaging can be returned within 30 days for a refund. Contact us to start a return.'],privacy:['Privacy Policy','We collect only what is needed to process orders and answer messages, and we never sell your data. Placeholder text: replace with your final policy.'],terms:['Terms','By using this site and placing an order you agree to these terms. Placeholder text: replace with your final terms.']};

export const Legal=({k})=>h`<${Wrap} title=${LEGAL[k][0]}><p className="max-w-xl text-[var(--mut)] leading-relaxed">${LEGAL[k][1]}</p></${Wrap}>`;
