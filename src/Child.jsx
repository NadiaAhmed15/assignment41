import React, { useContext } from 'react';
import { AppContext } from './App';

export default function Child() {
  const value = useContext(AppContext);

  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>
        Value from Context: <strong>{value}</strong>
      </p>
    </div>
  );
}
