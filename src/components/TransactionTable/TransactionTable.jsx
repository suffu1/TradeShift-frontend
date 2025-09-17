// src/components/TransactionTable/TransactionTable.jsx

import React from "react";
import styles from "./TransactionTable.module.css";

const TransactionTable = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Type</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx, index) => (
          <tr key={index}>
            <td>{tx.symbol}</td>
            <td>{tx.type}</td>
            <td>{tx.quantity}</td>
            <td>{tx.price}</td>
            <td>{tx.total}</td>
            <td>{tx.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
