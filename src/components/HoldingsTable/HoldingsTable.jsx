// src/components/HoldingsTable/HoldingsTable.jsx

import React from 'react';
import styles from './HoldingsTable.module.css';
import { FaEllipsisV } from 'react-icons/fa';

export const HoldingsTable = ({ holdings }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Holdings</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Quantity</th>
            <th>Avg Cost</th>
            <th>Current Price</th>
            <th>Market Value</th>
            <th>Gain/Loss</th>
            <th>Return %</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((stock) => (
            <tr key={stock.symbol}>
              <td>
                <div className={styles.symbol}>{stock.symbol}</div>
                <div className={styles.companyName}>{stock.name}</div>
              </td>
              <td>{stock.quantity}</td>
              <td>${stock.avgCost.toFixed(2)}</td>
              <td>${stock.currentPrice.toFixed(2)}</td>
              <td>${stock.marketValue.toFixed(2)}</td>
              <td className={stock.gainLoss > 0 ? styles.positive : styles.negative}>
                ${stock.gainLoss.toFixed(2)}
              </td>
              <td className={stock.returnPct > 0 ? styles.positive : styles.negative}>
                {stock.returnPct.toFixed(2)}%
              </td>
              <td><FaEllipsisV className={styles.actionsIcon} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};