import React, { useEffect, useState } from 'react';
import Util from './Util';

function ConditionalRendering() {
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
  const renderRow = (key, value) => <div>
    <span>{key}: </span>
    <span className='bold'>{value}</span>
  </div>;
  const renderView = () => {
    const {id, title, name, tags} = data;
    return <div>
      <h2>Conditional Rendering</h2>
      {renderRow('Id', id)}
      {renderRow('Title', title)}
      {renderRow('Name', name)}
      {renderRow('Tags', tags.join(', '))}
    </div>
  }

  return <>
    {error && renderError()}
    {loading && renderLoading()}
    {data && renderView()}
  </>;
}
export default ConditionalRendering;