import React, { useState } from 'react';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = () => {
    if (newTransaction.description && newTransaction.amount) {
      setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
      setNewTransaction({ description: '', amount: '' });
    }
  };

  const handleSortTransactions = () => {
    setTransactions([...transactions].sort((a, b) => a.description.localeCompare(b.description)));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Bank Transactions</h1>
      <input
        type="text"
        placeholder="Search Transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSortTransactions}>Sort by Description</button>
      <div id='center'>
        <input
          type="text"
          placeholder="Description"
          value={newTransaction.description}
          onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
