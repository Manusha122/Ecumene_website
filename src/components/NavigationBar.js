
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <Link to="/HomePage">Home</Link>
        </li>
        <li>
          <Link to="/cart">Add to Cart</Link>
        </li>
        <li>
          <Link to="/productPage">Product</Link>
        </li>
        <li>
          <Link to="/product">Car</Link>
        </li>
        <li>
          <Link to="/product">Bike</Link>
        </li>
      </ul>
    </nav>
    
  );
}

export default NavigationBar;
