import React from 'react';
import { ApiProvider } from "@gear-js/react-hooks";
import VaraApp from './vara/varaApp';
import { initialArgs } from './vara/shared/utils/varaUtil';

function App() {
   /*Se tiene pensado añadir context de 
    -polkadot
    -En el caso que quiera utilizar otra blockchain

    por el momento solo se usa la red vara
   */
  return (
    
    <ApiProvider initialArgs={initialArgs}>
      <VaraApp/> 
    </ApiProvider>
  );
}

export default App;