import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import styles from './AppCount.module.css';

function AppCounter() {
  const [total, setTotal] = useState(0);
  const handleAddTotal = () => {
    setTotal(prev => prev + 1);
  }
  return (
    <div>
      <div className={styles.total}>
        <span className={styles.number}>{total}</span>
        {total>10 && <span>💡</span>}
      </div>
      <Counter total={total} onClick={handleAddTotal} />
      <Counter total={total} onClick={handleAddTotal} />
    </div>
  );
}

export default AppCounter;
