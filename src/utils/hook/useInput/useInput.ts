import { useState } from 'react';

export const useInput = () => {
  const [value , setValue] = useState<string>('100')
  return { value, setValue}
}