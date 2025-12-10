import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
// import styles from './Product.module.css';

export default function Product() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  const [ loading, products ] = useProducts({ checked }); // useProducts Hooks 생성

  if(loading) return (<p>Loading</p>);
  return (
    <>
      <input type="checkbox" id="sales" checked={checked} onChange={handleChange}></input>
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
