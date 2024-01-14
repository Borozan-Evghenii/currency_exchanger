import React, { createContext } from 'react';
import { CurrencySymbol } from '../../../../@types';
interface ContextValueProps {
  baseCurrency: string;
  setBaseCurrency: React.Dispatch<React.SetStateAction<string>>;
  toCurrency: string;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  currencySymbols: CurrencySymbol[] | undefined;
  setCurrencySymbols: React.Dispatch<React.SetStateAction<CurrencySymbol[]| undefined>>
}
interface CurrencyProvider {
  children: React.ReactNode;
}
export const CurrencyContext = createContext<ContextValueProps>({} as ContextValueProps);

const CurrencyProvider: React.FC<CurrencyProvider> = ({ children }) => {

  const [baseCurrency, setBaseCurrency] = React.useState<string>('USD');
  const [toCurrency, setToCurrency] = React.useState<string>('MDL');
  const [currencySymbols, setCurrencySymbols] = React.useState<CurrencySymbol[] | undefined>([] as CurrencySymbol[]);


  const contextValue: ContextValueProps = {
    baseCurrency,
    setBaseCurrency,
    toCurrency,
    setToCurrency,
    currencySymbols,
    setCurrencySymbols
  };

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;