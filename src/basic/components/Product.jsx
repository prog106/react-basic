import React, { useState, useEffect } from 'react';
// import styles from './Product.module.css';

export default function Product() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(true);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${!checked ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then(data => {
      // console.log('세팅');
      setProducts(data);
    });
    return () => {
      console.log('청소');
    }
  }, [checked]);
  return (
    <>
      <input type="checkbox" id="sales" value={checked} onChange={handleChange}></input>
      <label htmlFor="sales">HOT Sales!</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  )
}
