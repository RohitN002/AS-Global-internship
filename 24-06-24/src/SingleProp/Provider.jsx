import React, { useState } from 'react';
import ChildComponent from './ChildComponent';


function Provider() {
  const [data, setData] = useState({});

  const receiveData = (key, value) => {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ChildComponent sendData={receiveData} />
    </div>
  );
}

export default Provider;
