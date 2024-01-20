import React from 'react';
import { DatePicker } from '../datePicker/DatePicker.tsx';
import { Button } from '../button/Button.tsx';
import { FilterDataResult } from '../../../@types';

interface DateRangeFilterProps {
  onSelect: (data: FilterDataResult) => void;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ onSelect }) => {
  const today = new Date().toLocaleDateString('en-CA');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const start_data = event.target.elements.start_data.value;
    const end_data = event.target.elements.end_data.value;
    const data = { start_data, end_data };
    onSelect(data);
  };

  React.useEffect(() => {

  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="flex items-end gap-5"
    >

      <div className="flex flex-col gap-2">
        <label className="text-xs">Start Date</label>
        <DatePicker
          name="start_data"
          initialDate={today}
          max={today}
          onSelectItem={(value) => console.log(value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs">End Date</label>
        <DatePicker
          name="end_data"
          initialDate={today}
          max={today}
          onSelectItem={(value) => console.log(value)}
        />
      </div>
      <Button
        type={'submit'}
      >Set filter</Button>
    </form>
  );
};