import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';
import CoinsList from '../../components/CoinsList/CoinsList';
import s from './Main.module.scss';

const Main = ({ coins, balance, setBalance }) => {
  return (
    <main className={s.main}>
      <Card balance={balance} setBalance={setBalance} />
      {coins.length > 0 ? <CoinsList coins={coins} /> : <div>Loading...</div>}
    </main>
  );
};

export default Main;

Main.propTypes = {
  coins: PropTypes.array,
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func,
};
