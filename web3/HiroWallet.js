// HiroWallet.js
import React, { useState } from 'react';
import { useConnect } from '@hiro-wallet/react';

const HiroWallet = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { doOpenAuth } = useConnect();

  const handleConnectWallet = async () => {
    try {
      setLoading(true);
      setError(null);

      // Open the Hiro Wallet authentication modal
      await doOpenAuth();

      // After the user connects the wallet, you can perform further actions

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <p>Connecting to Hiro Wallet...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <button onClick={handleConnectWallet}>Connect Wallet</button>
          {children}
        </>
      )}
    </div>
  );
};

export default HiroWallet;
