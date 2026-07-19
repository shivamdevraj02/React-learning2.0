import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Product from './pages/Product'
import About from './pages/About'
import Home from './pages/Home'
import Mens from './pages/Mens'
import Womens from './pages/Womens'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />}>
            <Route path="Mens" element={<Mens />} />
            <Route path="Womens" element={<Womens />} />
          </Route>
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
