import React, { useEffect, useState } from 'react';

const DataFetchHOC = ({ Component, url, ...props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url).then((data) => {
      if (data.error) {
        setError('Problem loading data');
      } else {
        setData(data);
      }
      setLoading(false);
    })
  }, [setLoading]);

  // Add use-cases for isLoading and error
  // ... so that individual Components don't have to implement the same details

  return <Component {...props} data={data} loading={loading} error={error} />;
};

const BusinessCard = (props) => {
  const {data, loading, error} = props;
  // dummy component
  // render here
  return null;
};

const Banner = (props) => {
  const {data, loading, error} = props;
  // dummy component
  // render here
  return null;
};

function myApp() {
  return <>
    <DataFetchHOC Component={BusinessCard} url='foo' />
    <DataFetchHOC Component={Banner} url='bar' />
    <DataFetchHOC Component={Banner} url='baz' />
  </>;
}

export default function () {
  return <div>Look at my code</div>;
}