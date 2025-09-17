// src/components/SearchBar/SearchBar.jsx

import React from 'react';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = ({ placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <FaSearch className={styles.icon} />
      <input 
        className={styles.input} 
        type="text" 
        placeholder={placeholder || "Search for news, symbols, or companies..."} 
      />
    </div>
  );
};