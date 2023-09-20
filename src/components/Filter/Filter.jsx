import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.scss';

const Filter = ({ coins, setFilteredCoins }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(value)
    );
    setFilteredCoins(filteredCoins);
  }, [coins, setFilteredCoins, value]);

  return (
    <div className={s.filter}>
      <input
        className={s.filterInput}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="bitcoin"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  coins: PropTypes.array,
  setFilteredCoins: PropTypes.func,
};
