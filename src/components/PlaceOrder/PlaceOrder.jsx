// src/components/PlaceOrder/PlaceOrder.jsx

import React from 'react';
import styles from './PlaceOrder.module.css';
import { FaExchangeAlt } from 'react-icons/fa';

export const PlaceOrder = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Place Order</h3>
      <div className={styles.placeholder}>
        <FaExchangeAlt className={styles.icon} />
        <p>Select a stock to start trading</p>
      </div>
    </div>
  );
};