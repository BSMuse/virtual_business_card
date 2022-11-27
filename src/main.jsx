import React from 'react'
import ReactDOM from 'react-dom/client'
import Intro from './Intro'
import Info from './Info'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Intro />
    <Info />
    <Footer />
  </React.StrictMode>
)
