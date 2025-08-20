import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import IngredientProvider from './context/IngredientContext';
import FavorisProvider from './context/FavorisContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavorisProvider>
      <IngredientProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IngredientProvider>
    </FavorisProvider>
  </StrictMode>,
)
