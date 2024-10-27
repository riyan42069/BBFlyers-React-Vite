import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello from Vite React Chrome Extension!');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
