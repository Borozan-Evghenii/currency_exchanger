import React from 'react';
import { useDebounce, useInput } from '../../utils/hook';
import { Props } from '../../../@types';


interface DatePickerProps extends Props<"input">{
  initialDate?: string
  onSelectItem : (date: string) => void
  id?: string
  className?: string
}
export const DatePicker: React.FC<DatePickerProps> = ({ initialDate, onSelectItem, id, className , ...props}) => {
  const classNameDefault = 'border border-[#a4a4a4] px-[12px] py-[6px] text-[14px] cursor-pointer'
  const picker = useInput(initialDate ? initialDate: '' )
  const debounceValue = useDebounce(picker.value, 2000)
  const onChange = (value : string) => {
    picker.setValue(value)
  }

  React.useEffect(() => {
    onSelectItem(debounceValue)
  },[debounceValue])

  return (
    <input
      {...props}
      className={className ? className : classNameDefault}
      type="date"
      value={picker.value}
      onChange={(event) => onChange(event.target.value)}
    />

  );
}
