import React, { createContext } from 'react';
import './App.css';
import Child from './Child';

// Create a Context
const MyContext = createContext();

// Export Context for use in the Child component
export const AppContext = MyContext;

export default function App() {
  const contextValue = "Hello from App!";

  return (
    <MyContext.Provider value={contextValue}>
      <div className="app">
        <h1>Parent Component (App)</h1>
        <Child />
      </div>
    </MyContext.Provider>
  );
}
