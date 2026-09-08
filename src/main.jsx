import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PatientSessionProvider } from './context/PatientSessionContext.jsx';
import { NarrationProvider } from './context/NarrationContext.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientSessionProvider>
        <NarrationProvider>
          <App />
        </NarrationProvider>
      </PatientSessionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
