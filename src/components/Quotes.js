// import PropTypes from 'prop-types';
import '../stylesheets/quotes.scss';
import { useState, useEffect } from 'react';

export default function Quotes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          method: 'GET',
          headers: { 'X-Api-Key': 'aSn23Z2Z26ES8eaiczrw2w==SHUDji9fSQZwMG1g' },
          contentType: 'application/json',
        });

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div id="quotes">
        <h3 className="error">
          Couldn&apost get data from source:
        </h3>
      </div>
    );
  }

  if (loading) {
    return (
      <div id="quotes">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (data.length > 0) {
    return (
      <div id="quotes">
        <p>{data[0].quote}</p>
        <h3>
          {'- '}
          {data[0].author}
        </h3>
      </div>
    );
  }
}
