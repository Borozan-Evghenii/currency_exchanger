import React from 'react';
import Tab from '../tab/Tab.tsx';
import { FaAngleDown } from "react-icons/fa";
import Autocomplete from '../autocomplet/Autocomplete.tsx';

interface TabGroupProps{
  onSelect : (item:string) => void
  value: string
}
const TabGroup: React.FC<TabGroupProps> = ({onSelect, value}) => {
  const [select , setSelect ] = React.useState<string>(value || 'UAH')
  const [showAutocomplete, setShowAutocomplete] = React.useState<boolean>(false)
  const [selectedAutocomplete, setSelectAutocomplete] = React.useState<string| null>(null)




  const data: string[] = ['UAH', 'USD', 'EUR', 'RON', 'MDL']


  return (
    <div className='flex my-[10px] relative'>
      {
        data?.map((item, index) => (
          <Tab
            isActive={select === item}
            onClick={() => {
              onSelect(item)
              setSelect(item);
            }}
            key={index}
          >{item}</Tab>
        ))
      }
      {selectedAutocomplete && (<Tab isActive={select === selectedAutocomplete}>{selectedAutocomplete}</Tab>)}
      <Tab
        onClick={()=> setShowAutocomplete(prevState => !prevState)}
      >
        <FaAngleDown />
      </Tab>
      {showAutocomplete && (<Autocomplete
        initialValue={''}
        onSelect={(item) => {
          setSelect(item)
          if(!data.includes(item)){
            setSelectAutocomplete(item)
            onSelect(item)
          }else{

            onSelect(item)
          }



          setShowAutocomplete(prevState => !prevState)
        }}
      />)}
    </div>
  );
};

export default TabGroup;