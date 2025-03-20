import { useState } from 'react';

import Button from './Button';
import './Joke.css';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAPI = () => {
    setLoading(true);
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setJoke(data.joke))
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setJoke('Failed to fetch joke');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="joke">
      <Button callAPI={fetchAPI} />
      {loading && <p>Loading...</p>}
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
