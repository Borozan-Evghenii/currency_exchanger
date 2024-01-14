import React, { useDeferredValue } from 'react';
import style from './Autocomplete.module.css';
import { CiSearch } from 'react-icons/ci';
import { CurrencySymbol } from '../../../@types';
interface AutocompleteProps{
  initialValue: string;
  onSelect: (item: CurrencySymbol) => void;
  items: CurrencySymbol[] | undefined
}

const Autocomplete= React.forwardRef<HTMLDivElement, AutocompleteProps>(({ onSelect, initialValue,items }, ref) => {

  const [filteredList, setFilteredList] = React.useState<CurrencySymbol[] |undefined>(items);
  const [selectedItem, setSelectedItem] = React.useState<string >(initialValue );

  const deferList = useDeferredValue(filteredList);
  const inputChangeHandler = (target: string) => {
    setFilteredList(items?.filter((item) => item.symbol.toLowerCase().includes(target.toLowerCase()) || item.name.toLowerCase().includes(target.toLowerCase())));
  };
  const itemClick = (item: {name:string, symbol: string}) => {
    setSelectedItem(item.symbol);
    onSelect(item);
  };


  return (
    <div className={style.container} ref={ref}>
      <div className='relative'>
        <div className={style.inputContainer}>
          <input
            autoFocus={true}
            onChange={(event) => inputChangeHandler(event.target.value)}
            className={style.input}
          />
          <CiSearch />
        </div>
        <ul className={style.list}>
          {
            deferList?.map(item => (
              <li
                key={item.symbol}
                onClick={() => itemClick(item)}
                className={`${style.listItem} ${selectedItem === item.symbol ? 'bg-blue-500 text-[#fff]' : ''}`}
              >{item.symbol} - {item.name}</li>
            ))
          }
        </ul>
      </div>
    </div>

  );
})

export default Autocomplete;