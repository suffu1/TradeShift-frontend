// src/pages/Login/LoginPage.jsx

import React from 'react';
import styles from './LoginPage.module.css';
import { FaLeaf } from 'react-icons/fa';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={styles.header}>
          <FaLeaf className={styles.logo} />
          <h1>TradeShift</h1>
          <p>Professional Trading Platform</p>
        </div>
        
        <div className={styles.formContainer}>
          <h2>Welcome Back</h2>
          <p className={styles.subtitle}>Sign in to your trading account</p>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className={styles.signInButton}>Sign In</button>
          </form>

          <p className={styles.signupText}>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>

        <div className={styles.demoMode}>
          <p><span>Demo Mode:</span> Use any email and password to access the platform</p>
        </div>
      </div>
    </div>
  );
};