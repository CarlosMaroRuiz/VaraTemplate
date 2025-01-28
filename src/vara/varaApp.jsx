import React from 'react';
import { useApi } from "@gear-js/react-hooks";
import IntroductionPage from './features/introduction';

function VaraApp() {
  const { isApiReady } = useApi();

  return (
    <>
      {isApiReady ? (
  
           <IntroductionPage />
  
    
      ) : (
        <div className="h-screen flex items-center justify-center">
          <p className="text-lg text-blue-500">Connecting to Vara Network...</p>
        </div>
      )}
    </>
  );
}

export default VaraApp;