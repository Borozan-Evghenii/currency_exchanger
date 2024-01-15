/// <reference types="vite/client" />
import { ComponentPropsWithRef } from 'react'
export type Props<T> = import('react').ComponentPropsWithRef<T>;

interface ServerData {
  status: number;
  terms: string;
  privacy: string;
}

interface ServerCurrenciesSymbols extends ServerData {
  currencies: {
    [key: string]: string
  };
}

interface ServerCurrenciesRate extends ServerData {
  timestamp: number;
  source: string;
  quotes: {
    [key: string]: number
  };
}

interface ServerCurrenciesHistorical extends ServerData {
  historical: boolean,
  date: string,
  timestamp: number;
  source: string;
  quotes: {
    [key: string]: number
  }
}

type CurrencySymbol = {
  name: string
  symbol: string
}

type CurrencyRate = {
  [key: string]: number
}

