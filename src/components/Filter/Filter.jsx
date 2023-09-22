import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CoinsContext } from '../../context/coinsContext';
import s from './Filter.module.scss';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

const Filter = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const { value, setValue } = useFilterCoins(coins, setCoins);

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
  setCoins: PropTypes.func,
};
