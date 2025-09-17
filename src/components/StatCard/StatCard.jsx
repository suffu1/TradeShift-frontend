// src/components/StatCard/StatCard.jsx

import React from 'react';
import styles from './StatCard.module.css';

// Notice we are accepting 'props': title, value, and icon
export const StatCard = ({ title, value, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
      <div className={styles.iconContainer}>
        {icon}
      </div>
    </div>
  );
};