import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import PricingPage from './pages/Pricing/PricingPage'
import Contact from './pages/Contact/Contact'
import CopyRight from './components/copyright/CopyRight'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <CopyRight />
    </Router>
  )
}

export default App
