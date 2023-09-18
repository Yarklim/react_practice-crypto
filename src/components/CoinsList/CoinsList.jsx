import PropTypes from 'prop-types';
import s from './CoinsList.module.scss';

const CoinsList = ({ coins }) => {
  return (
    <ul className={s.coinsList}>
      {coins.map((coin) => (
        <li className={s.coinItem} key={coin.uuid}>
          <div className={s.coinItemInfo}>
            <img
              className={s.coinItemLogo}
              src={coin.iconUrl}
              alt={coin.name}
            />
            <p style={{ color: coin.color }}>{coin.name} / USD</p>
          </div>
          <div className={s.coinItemPrice}>
            <p style={{ color: coin.color }}>
              {Number(coin.price).toFixed(2)} USD
            </p>
            <p style={{ color: coin.color }}>
              {Number(coin.btcPrice).toFixed(6)} BTC
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CoinsList;

CoinsList.propTypes = {
  coins: PropTypes.array,
};
