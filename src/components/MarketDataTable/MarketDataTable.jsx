// src/components/MarketDataTable/MarketDataTable.jsx

import React from 'react';
import styles from './MarketDataTable.module.css';

export const MarketDataTable = ({ stocks }) => {
  return (
    <div className={styles.card}>
       <h3 className={styles.title}>Market Data</h3>
       <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
            <th>Volume</th>
            <th>Market Cap</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td>
                <div className={styles.symbol}>{stock.symbol}</div>
                <div className={styles.companyName}>{stock.name}</div>
              </td>
              <td>${stock.price.toFixed(2)}</td>
              <td className={stock.changePct < 0 ? styles.negative : styles.positive}>
                <div>{stock.changePct.toFixed(2)}%</div>
                <div className={styles.changeValue}>(${stock.changeValue.toFixed(2)})</div>
              </td>
              <td>{stock.volume}</td>
              <td>${stock.marketCap}</td>
              <td><span className={styles.sectorTag}>{stock.sector}</span></td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>
  );
};