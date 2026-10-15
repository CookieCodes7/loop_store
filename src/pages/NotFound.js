import {h} from '../lib/html';
import {Wrap} from '../components/PageWrap';

export const NotFound=({msg='This page could not be found.'})=>h`<${Wrap} title="Not found"><p className="text-[var(--mut)]">${msg}</p><a href="#/shop" className="btn btn-solid mt-8">Back to shop</a></${Wrap}>`;
