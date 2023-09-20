import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CoinsContext } from '../../context/coinsContext';
import s from './Filter.module.scss';

const Filter = ({ setFilteredCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

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
  setFilteredCoins: PropTypes.func,
};
