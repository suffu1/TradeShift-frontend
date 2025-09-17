// src/pages/Dashboard/DashboardPage.jsx

import React from 'react';
import { StatCard } from '../../components/StatCard/StatCard';
import { AssetList } from '../../components/AssetList/AssetList';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import styles from './DashboardPage.module.css';
import { FaDollarSign, FaChartLine, FaPercentage, FaThList } from 'react-icons/fa';

// Dummy data for our lists
const topHoldingsData = [
  { symbol: 'AA', name: 'Alcoa Corp', value: '$8,824.62', change: '+3.87%' },
  { symbol: 'GO', name: 'Google LLC', value: '$24,346.42', change: '+1.44%' },
  { symbol: 'MS', name: 'Microsoft Corp', value: '$8,312.96', change: '+2.31%' },
];

const marketMoversData = [
  { symbol: 'AAPL', name: 'Apple Inc.', value: '$176.49', change: '+0.41%' },
  { symbol: 'MSFT', name: 'Microsoft Corp.', value: '$332.52', change: '+0.10%' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', value: '$2434.64', change: '-0.03%' },
];

// Dummy data for the table
const transactionsData = [
  { symbol: 'AAPL', type: 'BUY', quantity: 50, price: '$170.25', total: '$8512.50', date: '1/15/2024' },
  { symbol: 'GOOGL', type: 'BUY', quantity: 10, price: '$2400.00', total: '$24000.00', date: '1/10/2024' },
  { symbol: 'MSFT', type: 'BUY', quantity: 25, price: '$325.00', total: '$8125.00', date: '1/8/2024' },
];

export const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.summaryGrid}>
        <StatCard title="Portfolio Value" value="$41,484.00" icon={<FaDollarSign />} />
        <StatCard title="Total Gain/Loss" value="$846.50" icon={<FaChartLine />} />
        <StatCard title="Return %" value="2.08%" icon={<FaPercentage />} />
        <StatCard title="Holdings" value="3" icon={<FaThList />} />
      </section>

      <section className={styles.listsGrid}>
        <AssetList title="Top Holdings" assets={topHoldingsData} />
        <AssetList title="Market Movers" assets={marketMoversData} />
      </section>

      {/* This section is now active */}
      <section>
        <TransactionTable transactions={transactionsData} />
      </section>
    </div>
  );
};