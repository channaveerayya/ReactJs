import React from 'react';
import Clock from './examples/Clock';
import Counter from './examples/Counter'
import Toggle from './examples/Toggle'
import Bind from "./examples/Bind";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Clock />
      <Toggle />
      <Bind />
    </div>
  );
}

export default App;
