import {h} from '../lib/html';

export function Qty({q,setQ,max=99}){
  return h`
    <div
      className="inline-flex items-center border border-[var(--line)]"
      role="group"
      aria-label="Quantity"
    >

      <button
        aria-label="Decrease"
        className="w-11 h-11"
        onClick=${()=>setQ(Math.max(1,q-1))}
      >
        −
      </button>

      <span
        className="w-10 text-center text-sm"
        aria-live="polite"
      >
        ${q}
      </span>

      <button
        aria-label="Increase"
        className="w-11 h-11"
        onClick=${()=>setQ(Math.min(max,q+1))}
      >
        +
      </button>

    </div>
  `;
}