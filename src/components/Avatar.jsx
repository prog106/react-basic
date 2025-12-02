import React from 'react';
import styles from './Avatar.module.css';

export default function Avatar({image, isNew}) {
  return (
    <div className={styles.avatar}>
      <img className={styles.photo} src={image} alt="avatar" />
      {isNew && <span className={styles.new}>new</span>}
    </div>
  )
}
