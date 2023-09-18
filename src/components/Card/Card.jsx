import s from './Card.module.scss';
import PropTypes from 'prop-types';

const Card = ({ balance, setBalance }) => {
  return (
    <div className={s.card}>
      <div className={s.cardBlock}>
        <p>CRYPTO-FINANCE</p>
        <button onClick={() => setBalance((prev) => prev + 1000)}>
          Add money
        </button>
      </div>
      <div className={s.cardBlock}>
        <p>YAR KLIM</p>
        <p>${balance}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  balance: PropTypes.number.isRequired,
  setBalance: PropTypes.func,
};
