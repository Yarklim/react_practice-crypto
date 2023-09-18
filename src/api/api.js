import axios from 'axios';

const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;

export const getCoins = async () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': key,
    },
  };

  try {
    const { data } = await axios.get(url + '/coins', options);
    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};
