import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Inject loading overlay
const loading = document.createElement('div');
loading.id = 'dimon-loading-overlay';
loading.innerHTML = `<img src="/dimon.png" alt="Loading..." class="dimon-loading-img" />`;
document.body.appendChild(loading);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Fade out and remove loading overlay after app is ready
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loading.classList.add('fade-out');
    setTimeout(() => loading.remove(), 700);
  }, 900); // Show for at least 900ms
});
