import {Children} from 'react';
import {h} from '../lib/html';

export const Icon=({d,label,onClick,badge})=>h`<button onClick=${onClick} aria-label=${label} className="relative p-2 hover:opacity-60 transition-opacity"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">${Children.toArray(d)}</svg>${badge>0&&h`<span className="absolute -top-0.5 -right-0.5 text-[9px] bg-[var(--ink)] text-black rounded-full w-4 h-4 grid place-items-center">${badge}</span>`}</button>`;
