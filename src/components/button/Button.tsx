import React from 'react';
import { Props } from '../../../@types';

export const Button :React.FC<Props<'button'>> = ({children,...props}) => {
  return (
    <button {...props} className='text-[14px] text-[#4a4a4a] bg-[#f5f5f5] border border-[#979797] py-[6px] px-[8px]'>
      {children}
    </button>
  );
};
