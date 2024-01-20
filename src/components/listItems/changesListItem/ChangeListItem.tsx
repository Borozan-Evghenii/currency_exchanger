import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { ChangeCurrency } from '../../../../@types';

interface ChangeListProps {
  data : ChangeCurrency
}

export const ChangeListItem: React.FC<ChangeListProps> = ({data}) => {
  return (
    <div className='grid grid-cols-4 py-[5px] border-t-[#a4a4a4] border border-1 border-x-0 border-b-0'>
      <p>{data.symbol}</p>
      <p>{data.start_rate}</p>
      <p>{data.end_rate}</p>
      <div className='flex items-center gap-4 justify-end'>
        <p>{data.change}</p>
        {
          data.change < 0 ?
            (<FaCaretDown fill='red'/>):
            (<FaCaretDown className='rotate-180' fill='green' /> )
        }
      </div>
    </div>
  );
};
