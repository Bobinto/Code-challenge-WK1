import React from 'react';

const TransactionTable = ({ transactions, sortTransactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortTransactions('description')}>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
