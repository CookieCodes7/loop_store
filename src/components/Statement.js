import {h} from '../lib/html';
import {Reveal} from './Reveal';

export function Statement(){
  return h`<section id="about" className="bg-[var(--off)] text-black py-28 md:py-48 px-5 md:px-10"><${Reveal} className="max-w-[1500px] mx-auto">
    <h2 className="h1 text-[clamp(2.4rem,8vw,7.5rem)] max-w-[16ch]">Your outfit isn't complete without the details.</h2>
    <p className="mt-10 max-w-md text-black/60 leading-relaxed">LOOP designs minimal accessories that elevate what you already wear. Considered shapes, honest materials, nothing extra.</p></${Reveal}></section>`;
}
