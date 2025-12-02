import React from 'react';
import Avatar from './Avatar';
import styles from './Profile.module.css';

export default function Profile({name, job, image, isNew}) {
  return (
    <div className={styles.profile}>
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  )
}
