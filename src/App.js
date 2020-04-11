import React from 'react';
import './App.css';

import Table from "./components/Table"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Table n={8} x={1} m={29} />
    </div>
  );
}

export default App;
