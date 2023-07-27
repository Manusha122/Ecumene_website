import React, { useState } from 'react';

const Product = ({ id, title, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ id, title, price });
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

const Cart = ({ products, calculateTotal, checkout }) => {
  const totalPrice = calculateTotal();

  const handleCheckout = () => {
    checkout();
  };

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const checkout = () => {
    setShowCheckout(true);
  };

  return (
    <div>
      <h1>My Shopping App</h1>
      {!showCheckout ? (
        <div>
          <Product
            id={1}
            title="Product 1"
            price={10}
            addToCart={addToCart}
          />
          <Product
            id={2}
            title="Product 2"
            price={15}
            addToCart={addToCart}
          />
          <Cart
            products={cart}
            calculateTotal={calculateTotal}
            checkout={checkout}
          />
        </div>
      ) : (
        <h2>Thank you for your purchase!</h2>
      )}
    </div>
  );
};

export default App;
