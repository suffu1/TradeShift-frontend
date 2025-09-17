// src/layouts/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};