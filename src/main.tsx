import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App'
import Tech from './pages/technologies'
import About from './pages/About'
import Portifolio from './pages/Portifolio'
import Footer from './pages/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div id='tech'><Tech /></div>
    <div id='about'><About /></div>
    <div id='portfolio'><Portifolio /></div>
    <Footer />
  </StrictMode>,
)
