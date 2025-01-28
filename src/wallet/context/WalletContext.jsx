import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAccount } from '@gear-js/react-hooks';
import { web3Enable, web3Accounts } from '@polkadot/extension-dapp';

const WalletContext = createContext({});

export function WalletProvider({ children }) {
  const { account: activeAccount } = useAccount();
  const [account, setAccount] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Efecto para actualizar el estado cuando activeAccount cambia
  useEffect(() => {
    if (activeAccount) {
      setAccount(activeAccount);
      console.log('Active account updated:', activeAccount);
    }
  }, [activeAccount]);

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const extensions = await web3Enable('Vara App');
      console.log('Extensions enabled:', extensions);

      if (extensions.length === 0) {
        throw new Error('No wallet extension found');
      }

      const availableAccounts = await web3Accounts();
      console.log('Available accounts:', availableAccounts);

      if (availableAccounts.length > 0) {
        setAccounts(availableAccounts);
        setAccount(availableAccounts[0]); // Seleccionar la primera cuenta por defecto
        console.log('Selected account:', availableAccounts[0]);
      } else {
        throw new Error('No accounts found');
      }
    } catch (err) {
      console.error('Wallet connection error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setAccounts([]);
  };

  const value = {
    account,
    accounts,
    isLoading,
    error,
    connectWallet,
    disconnectWallet
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider');
  }
  return context;
};