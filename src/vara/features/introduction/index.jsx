import React from 'react';
import { 
  useApi, 
} from '@gear-js/react-hooks';
import WalletComponent from '../../../wallet/components/walletComponents';
const IntroductionPage = () => {
    const { isApiReady } = useApi();
  return (

    <div className="mb-4">
      {
        !isApiReady && <p>Estado de API: ❌ Desconectado</p>
      }
    <WalletComponent/>
  </div>
  )
}

export default IntroductionPage;