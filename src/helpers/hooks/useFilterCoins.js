import { useEffect, useState } from 'react';

export const useFilterCoins = (coins, setCoins) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value)
    );
    setCoins(filteredCoins);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return { value, setValue };
};
