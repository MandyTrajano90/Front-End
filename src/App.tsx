import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Car from './pages/Car';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  return (

    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/car" element={ <Car /> } />
        <Route path="/*" element={ <NotFound /> } />
        <Route path="/details/:id" element={ <ProductDetails /> } />
        <Route path="/checkout" element={ <Checkout cartItems={ cartItems } /> } />
      </Route>

    </Routes>

  );
}

export default App;
