import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './index.js'
import Footer from './assets/Footer.jsx'
import Header from './assets/Header.jsx'
import Main from './assets/main.jsx'
import Slider from './assets/Sliders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <Main />
    <Slider />
    <Footer />
  </StrictMode>,
)
