// src/pages/Markets/MarketsPage.jsx

import React from 'react';
import styles from './MarketsPage.module.css';
import { StatCard } from '../../components/StatCard/StatCard';
import { MarketHeatmap } from '../../components/MarketHeatmap/MarketHeatmap';
import { MarketDataTable } from '../../components/MarketDataTable/MarketDataTable'; // 1. Import new component
import { FaGlobe, FaArrowsAltV, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const heatmapData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 176.44, change: -0.36 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 329.92, change: -0.30 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 646.35, change: 0.88 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 211.19, change: 0.06 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2430.63, change: 0.00 },
];

// 2. Add dummy data for the table
const marketTableData = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 176.44, changePct: -0.36, changeValue: -0.64, volume: '52.3M', marketCap: '2750.0B', sector: 'Technology' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 329.92, changePct: -0.30, changeValue: -1.00, volume: '23.5M', marketCap: '2480.0B', sector: 'Technology' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 646.35, changePct: 0.88, changeValue: 5.64, volume: '34.6M', marketCap: '1650.0B', sector: 'Technology' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 211.19, changePct: 0.06, changeValue: 0.13, volume: '45.2M', marketCap: '680.0B', sector: 'Automotive' },
];

export const MarketsPage = () => {
  return (
    <div className={styles.markets}>
      <section className={styles.summaryGrid}>
        <StatCard title="Market Cap" value="$9.63T" icon={<FaGlobe />} />
        <StatCard title="Avg Change" value="-0.10%" icon={<FaArrowsAltV />} />
        <StatCard title="Gainers" value="3" icon={<FaArrowUp />} />
        <StatCard title="Losers" value="2" icon={<FaArrowDown />} />
      </section>

      <section>
        <MarketHeatmap stocks={heatmapData} />
      </section>

      {/* 3. Replace placeholder with the new table component */}
      <section>
        <MarketDataTable stocks={marketTableData} />
      </section>
    </div>
  );
};