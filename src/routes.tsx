import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Checkout from './pages/checkout';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}