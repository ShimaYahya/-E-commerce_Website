import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import OneProduct from './Screens/OneProduct';
import OneCartItem from './Screens/OneCartItem';
import ProductListing from './Screens/ProductsListing';
import Cart from './Screens/Cart';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ProductListing />}/>
          <Route path="/product/:id" element={<OneProduct />}/>
          <Route path="/product/:id/cart" element={<OneCartItem />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
  );
}

export default App;
