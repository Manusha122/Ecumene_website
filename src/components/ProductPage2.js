
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductPage.module.css';


function ProductPage({ match }) {
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <><div>
      <style>{'body { background-color: #1976D2 }'}</style>
    </div><div className={styles.productPage}>
        <div>
          <img src="/img/B2.png" alt="" />
          <h2>KTM</h2>
          <p>A nimble, two-wheeled vehicle designed for speed and agility on the road.</p>
          <p>Price: ${190}</p>
          <button>Add to Cart</button>
        </div>
        <Link to="/component/AddToCartPage"><button>Add to Cart</button></Link>
        <div>
          <img src="/img/B3.jpg" alt="" />
          <h2>HONDA</h2>
          <p>A nimble, two-wheeled vehicle designed for speed and agility on the road.</p>
          <p>Price: ${200}</p>
          <Link to="/component/AddToCartPage"><button>Add to Cart</button></Link>
        </div>
        <Link to="/">Back to Home</Link>
      </div></>
  );
}

export default ProductPage;
