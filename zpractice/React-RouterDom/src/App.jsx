import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'

function App() {
  return (
    <>
    <div className="app-shell">
      <Nav />
      <main className="page-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
