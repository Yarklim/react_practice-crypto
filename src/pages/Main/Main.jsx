// import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import CoinsList from '../../components/CoinsList/CoinsList';
import Filter from '../../components/Filter/Filter';
import s from './Main.module.scss';

const Main = ({ coins, setCoins, balance, setBalance }) => {
  //   const filterExpensiveCoins = () => {
  //     return coins.filter((coin) => coin.price > 1000);
  //   };
  // Пример мемоизации значения
  //   const expensiveCoins = useMemo(() => filterExpensiveCoins(), [coins]);

  return (
    <main className={s.main}>
      <Card balance={balance} setBalance={setBalance} />
      <Filter setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;

Main.propTypes = {
  coins: PropTypes.array,
  setCoins: PropTypes.func,
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func,
  filteredCoins: PropTypes.array,
  setFilteredCoins: PropTypes.func,
};
