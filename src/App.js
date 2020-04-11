import React from 'react';
import './App.css';

import RedWormTable from "./RedWormTableView"
import GreenWormTable from "./GreenWormTableView"
import BlueWormTable from "./BlueWormTableView"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RedWormTable />
      <GreenWormTable />
      <BlueWormTable />

    </div>
  );
}

export default App;
