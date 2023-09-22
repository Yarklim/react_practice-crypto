import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { getCoins } from './api/api';
import { CoinsContext } from './context/coinsContext';

function App() {
  const [balance, setBalance] = useState(100000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    };
    fetchData();
  }, []);

  // Пример мемоизации функции
  const addBalance = useCallback(() => {
    setBalance((prev) => prev + 1000);
  }, []);

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header />
        <Main
          coins={coins}
          balance={balance}
          setBalance={addBalance}
          setCoins={setFilteredCoins}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  );
}

export default App;
