import * as React from 'react';
import CurrencyExchanger from '../module/currencyExchanger/currencyExchanger.tsx';


const Homepage: React.FC = () => {

  React.useEffect(() => {
    document.addEventListener('storage', (event) => {
      console.log(event);
    } )
  },[])

  return(
    <CurrencyExchanger/>
  )
};

export default Homepage;