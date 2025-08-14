import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import IngredientProvider from './context/IngredientContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IngredientProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IngredientProvider>
  </StrictMode>,
)
