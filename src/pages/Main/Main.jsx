import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';
import CoinsList from '../../components/CoinsList/CoinsList';
import Filter from '../../components/Filter/Filter';
import s from './Main.module.scss';

const Main = ({
  coins,
  balance,
  setBalance,
  filteredCoins,
  setFilteredCoins,
}) => {
  return (
    <main className={s.main}>
      <Card balance={balance} setBalance={setBalance} />
      <Filter coins={coins} setFilteredCoins={setFilteredCoins} />
      {coins.length > 0 ? (
        <CoinsList coins={filteredCoins} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Main;

Main.propTypes = {
  coins: PropTypes.array,
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func,
  setFilteredCoins: PropTypes.func,
  filteredCoins: PropTypes.array,
};
