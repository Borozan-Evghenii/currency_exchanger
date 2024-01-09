import React from 'react';
import style from './Input.module.css'
import { Props } from '../../../@types';

interface InputProps extends Props<'input'>{
  currency: string
}
const Input: React.FC<InputProps> = ({currency, ...props}) => {
  return (
    <div className={style.inputContainer}>
      <input className={style.input} {...props}/>
      <div className={style.currencyContainer}>
        {currency}
      </div>
    </div>
  );
};

export default Input;