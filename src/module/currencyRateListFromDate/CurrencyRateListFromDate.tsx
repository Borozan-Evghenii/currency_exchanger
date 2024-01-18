import React from 'react';
import { DateRangeFilter, List } from '../../components';
import { ChangeListItem } from '../../components/listItems';
import { useRateChanges } from '../../utils/hook';

const CurrencyRateListFromDate: React.FC = () => {

  const { ChangesRate } = useRateChanges('2024-01-01', '2024-01-02');
  console.log(ChangesRate);
  return (
    <div className="flex flex-col border border-[#a4a4a4] p-[20px] w-full gap-[20px]">
      <h2 className="text-xl">Валютный курс Национального Банка (НБМ) </h2>
      <DateRangeFilter />
      <List
        styles={'flex flex-col gap-2'}
        renderItem={(item) => <ChangeListItem data={item} />}
        data={[]}
      />
      <table>
        <thead>
        <tr>
          <th>Symbol</th>
          <th>Start</th>
          <th>End</th>
          <th>Difference</th>
          <th>Difference pct</th>
        </tr>
        </thead>
        <tbody>
          {ChangesRate?.map(item => (
            <tr>
              <th>{item}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyRateListFromDate;