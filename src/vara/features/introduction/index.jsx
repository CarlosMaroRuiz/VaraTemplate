import React from 'react';
import { 
  useApi, 
} from '@gear-js/react-hooks';
const IntroductionPage = () => {
    const { isApiReady } = useApi();
  return (

    <div className="mb-4">
    <p>Estado de API: {isApiReady ? '✅ Conectado' : '❌ Desconectado'}</p>
  </div>
  )
}

export default IntroductionPage;