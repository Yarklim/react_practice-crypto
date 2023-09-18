import PropTypes from 'prop-types';
import s from './CoinsList.module.scss';

const CoinsList = ({ coins }) => {
  return (
    <ul className={s.coinsList}>
      {coins.map((coin) => (
        <li key={coin.uuid}>{coin.name}</li>
      ))}
    </ul>
  );
};

export default CoinsList;

CoinsList.propTypes = {
  coins: PropTypes.array,
};
