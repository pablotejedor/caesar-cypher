import React, { useState } from 'react';
import { encryptMessage } from './helpers/encryptMessage';
export const CaesarsCypher = () => {
  const [cypherKey, setcypherKey] = useState(1);
  const [input, setinput] = useState('');
  const encryptedMessage = encryptMessage(cypherKey, input);

  const handleInputChange = e => {
    setinput(e.target.value.toLowerCase());
  };

  const swapHandler = () => {
    setinput(encryptedMessage);
    setcypherKey(cypher => Math.abs(cypher - 26));
  };

  const incrementKeyHandler = () => {
    if (cypherKey < 26) {
      setcypherKey(cypherKey + 1);
    }
  };

  const decrementKeyHandler = () => {
    if (cypherKey > 0) {
      setcypherKey(cypherKey - 1);
    }
  };

  return (
    <div className="container">
      <h1>Caesar's Cypher</h1>
      <div className="cypher-container">
        <textarea value={input} onChange={handleInputChange} />
        <button onClick={incrementKeyHandler}>+</button>
        <h3>Cypher Key: {cypherKey}</h3>
        <button onClick={decrementKeyHandler}>-</button>
        <textarea value={encryptedMessage}></textarea>
      </div>
      <button onClick={swapHandler}>Swap</button>
    </div>
  );
};
