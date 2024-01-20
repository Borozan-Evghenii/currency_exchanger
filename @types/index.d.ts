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

interface ServerCurrencyChange extends ServerData {
  change: boolean;
  start_date: string;
  end_date: string;
  source: string;
  quotes: {
    [key: string]: {
      start_rate: number
      end_rate: number
      change: number
      change_pct: number
    }
  };
}

type CurrencySymbol = {
  name: string
  symbol: string
}

type CurrencyRate = {
  [key: string]: number
}

type ChangeCurrency = {
  start_rate: number
  end_rate: number
  change: number
  change_pct: number
  symbol: string
}


interface FilterDataResult {
  start_data: string
  end_data: string
}