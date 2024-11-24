import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Components/Router/Router.jsx';
import Context from './Components/Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={Router}></RouterProvider>
    </Context>
  </StrictMode>
);
