import React, { createContext } from 'react';
import { Props } from '../../../../@types';

interface IContextValue {
  baseCurrency: string;
  setBaseCurrency: React.Dispatch<React.SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  rate: string;
  setRate: React.Dispatch<React.SetStateAction<string>>;
  amount1: string;
  setAmount1: React.Dispatch<React.SetStateAction<string>>;
  amount2: string;
  setAmount2: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrencyContext = createContext<IContextValue>({} as IContextValue)
const CurrencyProvider: React.FC<Props<'div'>> = ({children}) => {

  const [baseCurrency, setBaseCurrency] = React.useState<string>('UAH')
  const [toCurrency, setToCurrency] = React.useState<string>('UAH')
  const [rate, setRate] = React.useState<string>('')
  const [amount1, setAmount1] = React.useState<string>('0')
  const [amount2, setAmount2] = React.useState<string>('0')


   const contextValue:IContextValue  = {
    baseCurrency,
    setBaseCurrency,
    toCurrency,
    setToCurrency,
    rate,
    setRate,
    amount1,
    setAmount1,
    amount2,
    setAmount2
  }

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;