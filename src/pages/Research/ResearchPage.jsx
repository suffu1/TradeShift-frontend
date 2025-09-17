// src/pages/Research/ResearchPage.jsx

import React from 'react';
import styles from './ResearchPage.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const ResearchPage = () => {
  return (
    <div className={styles.research}>
      <h1 className={styles.title}>Market Research</h1>
      <p className={styles.subtitle}>
        Find the latest news and analysis for your next investment.
      </p>
      {/* The placeholder text is now customized */}
      <SearchBar placeholder="Search for trading symbols, news, and more..." />
    </div>
  );
};