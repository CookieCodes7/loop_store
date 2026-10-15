import React from 'react';
import {createRoot} from 'react-dom/client';
import {h} from './lib/html';
import {App} from './App';
import './index.css';

createRoot(document.getElementById('root')).render(h`<${App}/>`);
