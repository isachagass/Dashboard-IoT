import React from 'react';
import { ResidenciaProvider } from './context/ResidenciaContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <ResidenciaProvider>
      <Dashboard />
    </ResidenciaProvider>
  );
}

export default App;