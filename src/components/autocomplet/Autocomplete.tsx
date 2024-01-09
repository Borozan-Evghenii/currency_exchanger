import React, { useDeferredValue } from 'react';
import style from './Autocomplete.module.css';
import { CiSearch } from 'react-icons/ci';
interface AutocompleteProps {
  initialValue: string;
  onSelect: (item: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ onSelect, initialValue }) => {


  const list = [{ symbol: 'LEU', name: 'Leu Moldovenesc' }, { symbol: 'UAH', name: 'Grivna Ucraineasca' }];

  const [filteredList, setFilteredList] = React.useState(list);

  const [selectedItem, setSelectedItem] = React.useState<string >(initialValue );

  const deferList = useDeferredValue(filteredList);
  const inputChangeHandler = (target: string) => {
    setFilteredList(list.filter((item) => item.symbol.toLowerCase().includes(target.toLowerCase()) || item.name.toLowerCase().includes(target.toLowerCase())));
  };
  const itemClick = (item: {name:string, symbol: string}) => {
    setSelectedItem(item.symbol);
    onSelect(item.symbol);
  };

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <input
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
  );
};

export default Autocomplete;