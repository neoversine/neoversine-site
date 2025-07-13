import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IsLoadingProvider } from './context/IsLoadingContext'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <IsLoadingProvider>
    <App />
  </IsLoadingProvider>
  // </StrictMode>,
)
