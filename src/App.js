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
      <RedWormTable color="red"/>
      <GreenWormTable color="green"/>
      <BlueWormTable color="blue"/>
    </div>
  );
}

export default App;
