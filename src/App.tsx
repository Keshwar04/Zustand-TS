import React from 'react';
import logo from './logo.svg';
import {useZustandStore} from './store'
import './App.css';

function App() {
  const {count,setCount} = useZustandStore()
  console.log(count);
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={setCount}>Increment</button>
    </div>
  );
}

export default App;
