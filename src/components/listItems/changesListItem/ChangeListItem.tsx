import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

interface ChangeListProps {
  data : {
    id: number,
    name: string,
    symbol: string
    changes: number
  }
}

export const ChangeListItem: React.FC<ChangeListProps> = ({data}) => {
  return (
    <div className='grid grid-cols-3 py-[5px] border-t-[#a4a4a4] border border-1 border-x-0 border-b-0'>
      <p>{data.symbol}</p>
      <p>{data.name}</p>
      <div className='flex items-center gap-4 justify-end'>
        <p>{data.changes}</p>
        {
          data.changes < 0 ?
            (<FaCaretDown fill='red'/>):
            (<FaCaretDown className='rotate-180' fill='green' /> )
        }
      </div>
    </div>
  );
};
