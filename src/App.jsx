import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Home'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'

function App() {

  return (
    <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart/:productId" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </div>
  </Router>

  )
}

export default App
