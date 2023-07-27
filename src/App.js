// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ProductPage from './components/ProductPage';
import AddToCartPage from './components/AddToCartPage';
import './App.css';


function App() {
  return (
    <React.Fragment>
    <Router>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="./components/product/:id" component={ProductPage} />
          <Route path="./cart" component={AddToCartPage} />
        </Routes>
      </div>
      <div>
                <style>{'body { background-color: #1976D2 }'}</style>
      </div>
      <div>
      <h1>Welcome to Online Store</h1>
        <img src="/img/carimg.jpg" alt="" />
      </div>
      <div>
      </div>
      <div class="card-container">
        <div class="card">
            <h3>Cars</h3>
            <div className="./components/product-page">
            <img src="/img/carimg.jpg" alt="" />
            <p>A sleek, modern automobile with cutting-edge technology and a powerful engine.</p>
            <Link to="/component/ProductPage.js"><button>Car Products</button></Link>
        </div>
        </div>
        <div class="card">
        <h3>Bike</h3>
            <img src="/img/B1.jpg" alt="" />
            <p>A nimble, two-wheeled vehicle designed for speed and agility on the road.</p>
            <Link to="/component/ProductPage2.js"><button>Bike Products</button></Link>
        </div>
      </div>
      <div>
      
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
