import React from 'react';
import Tab from '../tab/Tab.tsx';
import { FaAngleDown } from 'react-icons/fa';
import Autocomplete from '../autocomplet/Autocomplete.tsx';
import { CurrencySymbol } from '../../../@types';

interface TabGroupProps {
  onSelect: (item: CurrencySymbol) => void;
  value: string;
  listItem: CurrencySymbol[] | undefined;

}

const TabGroup: React.FC<TabGroupProps> = ({ onSelect, value, listItem }) => {
  const [select, setSelect] = React.useState<string | undefined>(value || 'UAH');
  const [showAutocomplete, setShowAutocomplete] = React.useState<boolean>(false);
  const [selectedAutocomplete, setSelectAutocomplete] = React.useState<string | null>(null);
  const autocompleteRef = React.useRef<HTMLDivElement>(null)
  const popular: CurrencySymbol[] = [
    { symbol: 'USD', name: 'US Dollar' },
    { symbol: 'EUR', name: 'Euro' },
    { symbol: 'MDL', name: 'Moldovan Leu' },
    { symbol: 'RUB', name: 'Russian Ruble' },
    { symbol: 'RON', name: 'Romanian Leu' }
  ];

  const onSelectAutocomplete = (item: CurrencySymbol) => {
    setSelect(item.symbol);
    if (popular?.some(someItem => someItem.symbol === item.symbol)) {
      setSelectAutocomplete(null);
      onSelect(item);
    } else {
      setSelectAutocomplete(item.symbol);
      onSelect(item);
    }
    setShowAutocomplete(prevState => !prevState);
  }
  const onTabSelect = (item: CurrencySymbol) => {
    onSelect(item);
    setSelect(item.symbol);
    setShowAutocomplete(false);
  }

  return (
    <div className="flex my-[10px] relative">
      {
        popular?.map((item, index) => (
          <Tab
            isActive={select === item.symbol}
            onClick={() => onTabSelect(item)}
            key={index}
          >{item.symbol}</Tab>
        ))
      }
      {selectedAutocomplete && (
        <Tab
          onClick={() => setShowAutocomplete(prevState => !prevState)}
          isActive={select === selectedAutocomplete}
        >{selectedAutocomplete}</Tab>
      )}
      <Tab
        onClick={() => setShowAutocomplete(prevState => !prevState)}
      >
        <FaAngleDown />
      </Tab>
      {showAutocomplete && (
        <Autocomplete
          ref={autocompleteRef}
          items={listItem}
          initialValue={''}
          onSelect={(item) => onSelectAutocomplete(item)}
        />
      )}
    </div>
  );
};

export default TabGroup;