import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductosProvider } from './context/ProductosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductosProvider>
      <App />
    </ProductosProvider>
  </StrictMode>,
)
