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
      <div className="description">
    <h1>Caesar's Cypher</h1>
        <p>
          Just write the message you want to encrypt in the upper textfield and
          and the encrypted message will be shown in the lower textfield. Use +
          and - buttons to set the cypher key and "Swap" button to change
          between encrypt and decrypt.
        </p>
      </div>
      <div className="cypher-container">
        <textarea value={input} onChange={handleInputChange} />
        <div className="buttons-container">
          <button onClick={incrementKeyHandler}>+</button>
          <h3>Key: {cypherKey}</h3>
          <button onClick={decrementKeyHandler}>-</button>
          <button onClick={swapHandler}>Swap</button>
        </div>
        <textarea value={encryptedMessage} />
      </div>
    </div>
  );
};
