import React from 'react';
import { createRoot } from 'react-dom/client';
import DashboardCorporativo from './DashboardCorporativo.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DashboardCorporativo />
  </React.StrictMode>
);
