import React from 'react';
import { DateRangeFilter, List } from '../../components';
import { ChangeListItem } from '../../components/listItems';
import { ChangeCurrency, FilterDataResult } from '../../../@types';
import { useRateChanges } from '../../utils/hook';

const CurrencyRateListFromDate: React.FC = () => {
  const mock: ChangeCurrency[] = [
    {
      symbol: 'USA',
      start_rate: 0.0003,
      end_rate: -0.0003,
      change: 0.35,
      change_pct: 0.355
    },
    {
      symbol: 'MDL',
      start_rate: 0.0003,
      end_rate: -0.0003,
      change: 0.35,
      change_pct: 0.355
    },
    {
      symbol: 'UAH',
      start_rate: 0.0003,
      end_rate: -0.0003,
      change: -0.35,
      change_pct: 0.355
    },
    {
      symbol: 'AAF',
      start_rate: 0.0003,
      end_rate: -0.0003,
      change: 0.35,
      change_pct: 0.355
    },
    {
      symbol: 'NAC',
      start_rate: 0.0003,
      end_rate: -0.0003,
      change: 0.35,
      change_pct: 0.355
    },
    {
      symbol: 'LAS',
      start_rate: 0.0003,
      end_rate: -0.0003,
      change: -0.35,
      change_pct: 0.355
    }
  ];
  const [date, setDate  ] = React.useState<FilterDataResult>({} as FilterDataResult)

  const { ChangesRate } = useRateChanges(date?.start_data, date?.end_data);


  return (
    <div className="flex flex-col border border-[#a4a4a4] p-[20px] w-full gap-[20px]">
      <h2 className="text-xl">Валютный курс Национального Банка (НБМ)</h2>
      <DateRangeFilter
        onSelect={(data) => setDate(data)}
      />
      {mock && (
        <List
          styles={'flex flex-col gap-2'}
          renderItem={(item) => <ChangeListItem data={item} key={item.symbol} />}
          data={mock}
        />)}
    </div>
  );
};

export default CurrencyRateListFromDate;