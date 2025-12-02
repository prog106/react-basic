import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
// import styles from './AppProduct.module.css';

function AppCounter() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {showProducts && <Product />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

export default AppCounter;
