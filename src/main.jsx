import React from 'react';
import { createRoot } from 'react-dom/client';
import ClassCardsApp from './ClassCardsApp.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ClassCardsApp />);
