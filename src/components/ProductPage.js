
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
          <img src="/img/C1.jpg" alt="" />
          <h2>Audi</h2>
          <p>A sleek, modern automobile with cutting-edge technology and a powerful engine.</p>
          <p>Price: ${5000}</p>
          <Link to="/component/AddToCartPage"><button>Add to Cart</button></Link>
        </div>
        <Link to="/">Back to Home</Link>
        <div>
          <img src="/img/C2.jpg" alt="" />
          <h2>BMW</h2>
          <p>A sleek, modern automobile with cutting-edge technology and a powerful engine.</p>
          <p>Price: ${4500}</p>
          <Link to="/component/AddToCartPage"><button>Add to Cart</button></Link>
        </div>
        <Link to="/">Back to Home</Link>
      </div></>
  );
}

export default ProductPage;
