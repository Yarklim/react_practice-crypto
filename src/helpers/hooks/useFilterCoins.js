import { useEffect, useState } from 'react';

export const useFilterCoins = (coins, setCoins) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value)
    );
    setCoins(filteredCoins);
  }, [value]);

  return { value, setValue };
};
