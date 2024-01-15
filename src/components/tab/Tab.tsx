import React from 'react';
import style from './Tab.module.css'
import { Props } from '../../../@types';

interface TabProps extends Props<'button'>{
  isActive?: boolean
}
export const Tab : React.FC<TabProps> = ({children, isActive ,...props }) => {
  return (
    <button {...props} className={ `${style.button} ${isActive ? 'bg-[#F6AA2D] font-semibold text-[#ffffff]' : ' hover:bg-[#eeeeee]'} `}>
      {children}
    </button>
  );
}