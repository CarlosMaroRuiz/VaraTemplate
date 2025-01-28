import React, { useEffect } from 'react';
import { useWallet } from "../context/WalletContext";

function WalletComponent() {
  const {
    account,
    isLoading,
    error,
    connectWallet
  } = useWallet();

  // Añadir logs para debug
  useEffect(() => {
    if (account) {
      console.log('Account details:', {
        address: account.address,
        name: account.meta?.name,
        fullAccount: account
      });
    }
  }, [account]);

  // Componente para mostrar la información de la cuenta
  const AccountInfo = ({ account }) => (
    <div className="space-y-4">
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <p className="text-gray-400 text-sm mb-1">Address</p>
        <p className="text-white font-mono text-sm break-all">
          {account?.address || 'No address available'}
        </p>
      </div>
      
      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
        <p className="text-gray-400 text-sm mb-1">Account Name</p>
        <p className="text-white font-medium">
          {account?.meta?.name || 'No name available'}
        </p>
      </div>

      {account?.meta?.source && (
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <p className="text-gray-400 text-sm mb-1">Wallet Type</p>
          <p className="text-white font-medium">
            {account.meta.source}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-zinc-900/90 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md shadow-xl border border-zinc-800">
        {!account ? (
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-center text-green-400 mb-6">
              Connect your Wallet
            </h2>
            <button 
              onClick={connectWallet}
              disabled={isLoading}
              className={`
                w-full py-3 px-6 rounded-lg text-lg font-semibold
                transition-all duration-300
                ${isLoading 
                  ? 'bg-zinc-700 cursor-not-allowed' 
                  : 'bg-green-500 hover:bg-green-400 active:scale-95'
                }
                text-black shadow-lg shadow-green-500/20
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Connecting...</span>
                </div>
              ) : (
                'Connect Wallet'
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-green-400 mb-2">
                Wallet Connected
              </h2>
              <div className="inline-block bg-green-500/10 px-3 py-1 rounded-full">
                <span className="text-green-400 text-sm">Active</span>
              </div>
            </div>
            
            <AccountInfo account={account} />
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 text-sm">
              {error}
            </p>
          </div>
        )}
  
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-green-400">
            Vara Network
          </span>
          <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-green-400">
            Web3
          </span>
          <span className="px-3 py-1 bg-zinc-800/50 rounded-full text-xs text-green-400">
            Secure
          </span>
        </div>
      </div>
    </div>
  );
}

export default WalletComponent;