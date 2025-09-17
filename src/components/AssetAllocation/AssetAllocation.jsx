// src/components/AssetAllocation/AssetAllocation.jsx

import React from 'react';
import styles from './AssetAllocation.module.css';

export const AssetAllocation = ({ allocations }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Asset Allocation</h3>
      <ul className={styles.list}>
        {allocations.map((asset) => (
          <li key={asset.symbol} className={styles.listItem}>
            <div className={styles.info}>
              <div className={styles.symbol}>{asset.symbol}</div>
              <span className={styles.percentage}>{asset.percentage}%</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progress} 
                style={{ width: `${asset.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};