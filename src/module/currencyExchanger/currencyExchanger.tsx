import React from 'react';
import { useCurrencyRate, useCurrencySymbol, useExchangeContext } from '../../utils/hook';
import { useInput } from '../../utils/hook';
import { Input, TabGroup } from '../../components';

const CurrencyExchanger: React.FC = () => {
  const {
    baseCurrency,
    setBaseCurrency,
    toCurrency,
    setToCurrency
  } = useExchangeContext();

  const {
    Symbols ,
  } = useCurrencySymbol();

  const {
    Rates,
  } = useCurrencyRate(baseCurrency);

  const amount1 = useInput('100');
  const amount2 = useInput('100');

  console.log();
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
  );
};

export default CurrencyExchanger;