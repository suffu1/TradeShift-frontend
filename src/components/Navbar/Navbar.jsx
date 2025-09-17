// src/components/Navbar/Navbar.jsx

import React from 'react';
// 1. IMPORT THE CSS MODULE
import styles from './Navbar.module.css'; 
import { NavLink } from 'react-router-dom';
import { FaLeaf, FaTachometerAlt, FaBriefcase, FaChartBar, FaExchangeAlt, FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  return (
    // 2. USE THE IMPORTED STYLES
    <nav className={styles.navbar}> 
      <div className={styles.logoContainer}>
        <FaLeaf className={styles.logoIcon} />
        <a href="/" className={styles.logoText}>TradeShift</a>
      </div>

      <div className={styles.navLinks}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <FaBriefcase /> Portfolio
        </NavLink>
        <NavLink to="/trading" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <FaExchangeAlt /> Trading
        </NavLink>
        <NavLink to="/markets" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <FaChartBar /> Markets
        </NavLink>
        <NavLink to="/research" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          <FaSearch /> Research
        </NavLink>
      </div>

      <div className={styles.userProfile}>
        <div className={styles.userInfo}>
          <p className={styles.userName}>sufyan904</p>
          <p className={styles.userEmail}>sufyan904@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};