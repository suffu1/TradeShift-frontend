// src/pages/Trading/TradingPage.jsx

import React from 'react';
import styles from './TradingPage.module.css';
import { TradingDataTable } from '../../components/TradingDataTable/TradingDataTable';
import { PlaceOrder } from '../../components/PlaceOrder/PlaceOrder';

// Dummy Data
const tradingData = [
  { symbol: 'AAPL', price: 177.49, changePct: 0.20, changeValue: 0.36, volume: '52.3M' },
  { symbol: 'GOOGL', price: 2430.14, changePct: -0.02, changeValue: -0.52, volume: '1.2M' },
  { symbol: 'MSFT', price: 332.16, changePct: -0.10, changeValue: -0.34, volume: '23.5M' },
  { symbol: 'TSLA', price: 211.02, changePct: 0.20, changeValue: 0.42, volume: '45.2M' },
  { symbol: 'NVDA', price: 643.42, changePct: -0.05, changeValue: -0.48, volume: '34.6M' },
];

export const TradingPage = () => {
  return (
    <div className={styles.tradingGrid}>
      <div className={styles.dataTable}>
        <TradingDataTable stocks={tradingData} />
      </div>
      <div className={styles.placeOrder}>
        <PlaceOrder />
      </div>
    </div>
  );
};