import React, { useEffect, useState } from 'react';
import Util from './Util';

function VanillaComponent(data) {
  const { id, title, name, tags } = data.data;
  const renderRow = (key, value) => <div>
    <span>{key}: </span>
    <span className='bold'>{value}</span>
  </div>;

  return <div>
    <h2>Vanilla App</h2>
    {renderRow('Id', id)}
    {renderRow('Title', title)}
    {renderRow('Name', name)}
    {renderRow('Tags', tags.join(', '))}
  </div>;
}

function ContainerApp() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Util.fetchVanilla().then((data) => {
      if (data.error) {
        setError('Problem loading data');
      } else {
        setData(data);
      }
      setLoading(false);
    })
  }, [setLoading]);

  const renderLoading = () => <div>Loading...</div>;
  const renderError = () => <div>Got an error</div>;

  if (error) {
    return renderError();
  }
  if (loading) {
    return renderLoading();
  }
  if (data) {
    return <VanillaComponent data={data} />;
  }
  return <div />;
}
export default ContainerApp;