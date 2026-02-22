import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroPage from './HeroPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroPage />
  </StrictMode>,
)
