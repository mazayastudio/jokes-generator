import { useState } from 'react';

import Button from './Button';
import './Joke.css';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAPI = () => {
    setLoading(true);
    fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((res) => res.json())
      .then((data) => setJoke(data.joke))
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
