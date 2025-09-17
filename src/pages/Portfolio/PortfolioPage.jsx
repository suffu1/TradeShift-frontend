// src/pages/Portfolio/PortfolioPage.jsx

import React from 'react';
import styles from './PortfolioPage.module.css';
import { StatCard } from '../../components/StatCard/StatCard';
import { HoldingsTable } from '../../components/HoldingsTable/HoldingsTable';
import { AssetAllocation } from '../../components/AssetAllocation/AssetAllocation'; // 1. Import new component
import { FaDollarSign, FaMoneyBillWave, FaArrowUp } from 'react-icons/fa';

// Dummy data for the page
const holdingsData = [
  { symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 10, avgCost: 2400.00, currentPrice: 2432.16, marketValue: 24321.62, gainLoss: 321.62, returnPct: 1.34 },
  { symbol: 'AAPL', name: 'Apple Inc.', quantity: 50, avgCost: 170.25, currentPrice: 176.62, marketValue: 8831.00, gainLoss: -68.67, returnPct: -5.50 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', quantity: 25, avgCost: 325.00, currentPrice: 332.46, marketValue: 8311.52, gainLoss: 186.52, returnPct: 2.30 },
];

// 2. Add dummy data for the allocation chart
const allocationData = [
  { symbol: 'GOOGL', percentage: 58.4 },
  { symbol: 'AAPL', percentage: 21.6 },
  { symbol: 'MSFT', percentage: 20.0 },
];

export const PortfolioPage = () => {
  return (
    <div className={styles.portfolio}>
      <section className={styles.summaryGrid}>
        <StatCard title="Total Value" value="$41,614.30" icon={<FaDollarSign />} />
        <StatCard title="Total Cost" value="$40,637.50" icon={<FaMoneyBillWave />} />
        <StatCard title="Total Return" value="$976.80" icon={<FaArrowUp />} />
      </section>

      <section>
        <HoldingsTable holdings={holdingsData} />
      </section>

      <section className={styles.bottomGrid}>
        <div className={styles.chartPlaceholder}>
          <h3>Portfolio Performance</h3>
          <p>Performance chart would be displayed here</p>
        </div>
        {/* 3. Replace the placeholder with the new component */}
        <AssetAllocation allocations={allocationData} />
      </section>
    </div>
  );
};