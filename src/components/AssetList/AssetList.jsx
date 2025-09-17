// src/components/AssetList/AssetList.jsx

import React from 'react';
import styles from './AssetList.module.css';

export const AssetList = ({ title, assets }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {assets.map((asset) => (
          <li key={asset.symbol} className={styles.listItem}>
            <div className={styles.symbolContainer}>
              <div className={styles.symbol}>{asset.symbol}</div>
              <p className={styles.name}>{asset.name}</p>
            </div>
            <div className={styles.valuesContainer}>
              <p className={styles.value}>{asset.value}</p>
              <p 
                className={asset.change.startsWith('+') ? styles.positive : styles.negative}
              >
                {asset.change}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};