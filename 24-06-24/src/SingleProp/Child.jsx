import React from 'react';

function ChildComponent({ sendData }) {
  const handleClick = () => {
    sendData('message', 'Hello from Child Component!');
    sendData('timestamp', new Date().toISOString());
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
