// pages/wallet.js
import React, { useState, useEffect } from 'react';
import { useConnect } from '@hiro-wallet/react';
import axios from 'axios';

const WalletPage = () => {
  const { auth, doOpenAuth } = useConnect();
  const [accountData, setAccountData] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    if (auth) {
      fetchAccountData(auth?.stxAddress);
      // TODO: Implement websocket connection for real-time updates
    }
  }, [auth]);

  const fetchAccountData = async (stxAddress) => {
    try {
      // Fetch account balances
      const response = await axios.get(
        `https://stacks-node-api.testnet.stacks.co/extended/v1/address/${stxAddress}`
      );
      setAccountData(response.data);
      // Fetch transaction history
      const transactionsResponse = await axios.get(
        `https://stacks-node-api.testnet.stacks.co/extended/v1/address/${stxAddress}/transactions`
      );
      setTransactionHistory(transactionsResponse.data.results);
    } catch (error) {
      console.error('Error fetching account data:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await doOpenAuth();
      // The `auth` object will be updated automatically via React context
    } catch (error) {
      console.error('Error opening Hiro Wallet authentication:', error);
    }
  };

  return (
    <div>
      <h1>Hiro Wallet</h1>
      {!auth ? (
        <button onClick={handleLogin}>Login with Hiro Wallet</button>
      ) : (
        <>
          <h2>Account Balances</h2>
          {accountData && (
            <ul>
              <li>STX Balance: {accountData.balance.stx}</li>
              {/* Add more balances if needed */}
            </ul>
          )}
          <h2>Transaction History</h2>
          {transactionHistory.length > 0 ? (
            <ul>
              {transactionHistory.map((transaction) => (
                <li key={transaction.tx_id}>{transaction.tx_id}</li>
              ))}
            </ul>
          ) : (
            <p>No transactions found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default WalletPage;
