
import * as React from 'react';
import Input from '../components/Input/Input.tsx';
import TabGroup from '../components/tabGroup/tabGroup.tsx';
import { CurrencyContext } from '../utils/providers';


const Homepage: React.FC = () => {
  // const query = useQuery({ queryKey: ['currency'], queryFn: getCurrencies })
  // console.log(query);
  const {
    amount1,
    setAmount1,
    amount2,
    setAmount2,
    baseCurrency,
    setBaseCurrency,
    toCurrency,
    setToCurrency

  } = React.useContext(CurrencyContext)

  console.log('@amount2',amount2);
  console.log('@amount1',amount1);
  console.log('@baseCuery',baseCurrency);
  console.log('@baseCuery',toCurrency);

  return (
    <div className='flex items-center content-center h-[100vh]'>
      <div className='border border-[#979797] p-[20px] grid gap-4 w-[700px] mx-auto grid-cols-2'>

        <div className='flex flex-col'>
          <Input
            currency={baseCurrency}
            type="number"
            value={amount1}
            onChange={(event)=> setAmount1(event.target.value)}
          />
          <TabGroup
            value={baseCurrency}
            onSelect={(item)=> {
              setBaseCurrency(item)
            }}
          />
        </div>
        <div className='flex flex-col'>
          <Input
            currency={toCurrency}
            type="number"
            value={amount2}
            onChange={(event)=> setAmount2(event.target.value)}
          />
          <TabGroup
            value={toCurrency}
            onSelect={(item)=> {
              setToCurrency(item)
            }}
          />
        </div>

      </div>

    </div>
  );
};

export default Homepage;