import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ResidenciaProvider } from './context/ResidenciaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResidenciaProvider>
      <App />
    </ResidenciaProvider>
  </React.StrictMode>
);
