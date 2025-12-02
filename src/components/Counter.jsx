import React, { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter({total, onClick}) {
  const [count, setCount] = useState(0);
  const handleAddCounter = () => {
    setCount(prev => prev + 1);
    onClick();
  }
  return (
    <div className={styles.counter}>
      <span className={styles.number}>{count}/{total}</span>
      <button className={styles.button} onClick={handleAddCounter}>Add +</button>
    </div>
  )
}
