import React from 'react';
import { DatePicker } from '../datePicker/DatePicker.tsx';

export const DateRangeFilter: React.FC = () => {
  const today = new Date().toLocaleDateString('en-CA');

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-2">
        <h2 className='text-xs'>Start Date</h2>
        <DatePicker
          initialDate={today}
          max={today}
          onSelectItem={(value) => console.log(value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xs">End Date</h2>
        <DatePicker
          initialDate={today}
          max={today}
          onSelectItem={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};