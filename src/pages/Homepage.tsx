import * as React from 'react';
import CurrencyExchanger from '../module/currencyExchanger/currencyExchanger.tsx';
import CurrencyRateListFromDate from '../module/currencyRateListFromDate/CurrencyRateListFromDate.tsx';


const Homepage: React.FC = () => {

  return (
    <div  className='flex flex-col items-center justify-center gap-[20px] mt-[100px] max-w-[700px] mx-auto'>
      <CurrencyExchanger />
      <CurrencyRateListFromDate/>
    </div>
  );
};

export default Homepage;