import React from 'react';

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = React.useState<T>(value)

  React.useEffect(() => {
    const interval = setTimeout( () => {
      setDebounceValue(value)
    }, delay || 500)
    return () => clearTimeout(interval)
  }, [value, delay])

  return debounceValue
}