import * as React from 'react';
import Input from '../components/Input/Input.tsx';
import TabGroup from '../components/tabGroup/tabGroup.tsx';
import { useInput } from '../utils/hook/useInput/useInput.ts';
import { useCurrencyRate, useExchangeContext } from '../utils/hook';
import { useCurrencySymbol } from '../utils/hook';


const Homepage: React.FC = () => {
  const {
    baseCurrency,
    setBaseCurrency,
    toCurrency,
    setToCurrency
  } = useExchangeContext();
  const { Symbols } = useCurrencySymbol();
  const { Rates } = useCurrencyRate(baseCurrency);
  const amount1 = useInput();
  const amount2 = useInput();


  const exchangeFunc = () => {
    if (Rates) {
      const rate = Rates[toCurrency] || 1;
      const num = Number(amount1.value);
      const exchange: number = num * rate;
      amount2.setValue(exchange.toFixed(2).toString());
    }
  };


  React.useEffect(() => {
    exchangeFunc();
  }, [baseCurrency, toCurrency, amount1.value]);


  return (
    <div className="flex items-center justify-center gap-[20px] mt-[100px] px-[20px] max-w-[1000px] mx-auto">
      <div className="border border-[#979797] p-[20px] grid gap-4 w-[700px] grid-cols-2">
        <div className="flex flex-col">
          <Input
            currency={baseCurrency}
            type="number"
            value={amount1.value}
            onChange={(event) => {
              amount1.setValue(event.target.value);
            }}
          />
          <TabGroup
            listItem={Symbols}
            value={baseCurrency}
            onSelect={(item) => {
              setBaseCurrency(item.symbol);
            }}
          />
        </div>
        <div className="flex flex-col">
          <Input
            currency={toCurrency}
            type="number"
            value={amount2.value}
            onChange={(event) => {
              amount2.setValue(event.target.value);

            }}
          />
          <TabGroup
            listItem={Symbols}
            value={toCurrency}
            onSelect={(item) => {
              setToCurrency(item.symbol);
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Homepage;