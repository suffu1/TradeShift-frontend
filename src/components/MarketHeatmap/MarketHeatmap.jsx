// src/components/MarketHeatmap/MarketHeatmap.jsx

import React from 'react';
import styles from './MarketHeatmap.module.css';

export const MarketHeatmap = ({ stocks }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Market Heatmap</h3>
      <div className={styles.grid}>
        {stocks.map((stock) => (
          <div 
            key={stock.symbol} 
            className={`${styles.stockCard} ${stock.change < 0 ? styles.negative : styles.positive}`}
          >
            <p className={styles.symbol}>{stock.symbol}</p>
            <p className={styles.name}>{stock.name}</p>
            <p className={styles.price}>${stock.price.toFixed(2)}</p>
            <p className={styles.change}>{stock.change.toFixed(2)}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};