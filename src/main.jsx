import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'macro-css';
import App from './App.js';
import './configure/i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
