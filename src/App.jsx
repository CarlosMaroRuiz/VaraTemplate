import React from 'react';
import { ApiProvider } from "@gear-js/react-hooks";
import VaraApp from './vara/varaApp';
import { initialArgs } from './vara/shared/utils/varaUtil';
import { WalletProvider } from './wallet/context/WalletContext';

function App() {
   /*Se tiene pensado añadir context de 
    -polkadot
    -En el caso que quiera utilizar otra blockchain

    por el momento solo se usa la red vara
   */
  return (
    
    <ApiProvider initialArgs={initialArgs}>
      <WalletProvider>
      <VaraApp/> 
      </WalletProvider>
    </ApiProvider>
  );
}

export default App;