// src/components/TradingDataTable/TradingDataTable.jsx

import React from 'react';
import styles from './TradingDataTable.module.css';

export const TradingDataTable = ({ stocks }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Market Data</h3>
        {/* Search bar can be added here later */}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Volume</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td className={stock.changePct < 0 ? styles.negative : styles.positive}>
                <div>{stock.changePct.toFixed(2)}%</div>
                <div className={styles.changeValue}>(${stock.changeValue.toFixed(2)})</div>
              </td>
              <td>{stock.volume}</td>
              <td><button className={styles.tradeButton}>Trade</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};