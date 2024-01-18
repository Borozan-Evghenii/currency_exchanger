import { useQuery } from '@tanstack/react-query';
import { getRateChange } from '../../api/endpoints/getRateChange.ts';
import { ChangeCurrency } from '../../../../@types';

export const useRateChanges = (start_date: string, end_date: string, source?: string ,  currencies?: string ) => {
  const {
    data : ChangesRate,
    isLoading,
    error
  } = useQuery({
    queryKey: ['changes', source, start_date, end_date],
    queryFn: () => getRateChange(
      start_date,
      end_date,
      currencies,
      source
    ),
    select : data => {
      const newObject: ChangeCurrency = {}
      Object.entries(data.data.quotes).forEach(([key, value]:[string, any]) => {
        const newKey: string = key.replace(new RegExp(data.data.source), '');
        newObject[newKey] = value
      })
      return newObject
    }
  })

  return {ChangesRate, isLoading ,error}
}