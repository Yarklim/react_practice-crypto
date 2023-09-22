import { WithUaBalance } from '../../helpers/hoc/withUaBalance';
import s from './Card.module.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Card = ({ balance, setBalance, uaBalance }) => {
  return (
    <div className={s.card}>
      <div className={s.cardBlock}>
        <p>CRYPTO-FINANCE</p>
        <button onClick={setBalance}>Add money</button>
      </div>
      <div className={s.cardBlock}>
        <p>YAR KLIM</p>
        <p>${balance}</p>
      </div>
    </div>
  );
};

export default WithUaBalance(Card);

Card.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func,
  uaBalance: PropTypes.number,
};
