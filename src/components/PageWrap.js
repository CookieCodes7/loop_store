import {h} from '../lib/html';

export const Wrap=({title,children})=>h`<main className="page max-w-[1500px] mx-auto px-5 md:px-10 pt-32 pb-24 min-h-[70vh]"><h1 className="h1 text-5xl md:text-8xl mb-12">${title}</h1>${children}</main>`;
