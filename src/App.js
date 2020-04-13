import React from 'react';
import './App.css';

import RedTable from "./RedTableView";
import GreenTable from "./GreenTableView";
import BlueTable from "./BlueTableView";
import RedConfig from "./RedConfig";
import BlueConfig from "./BlueConfig";
import GreenConfig from "./GreenConfig";
import { makeSaver, retrieve } from "./local-storage";

function App() {
  return (
    <div className="App">
      <div>
          <RedTable className="App-redTable" />
          <GreenTable className="App-greenTable" />
          <BlueTable className="App-blueTable" />
      </div>
      <div className="App-config">
          <RedConfig
                onSubmit={makeSaver("redtable")}
                initialValues={retrieve(
                    "redtable",
                    {
                        n: 8,
                        x: 1,
                        m: 29,
                        d: 'ltr-up',
                        w: 20,
                    }
                )}
          >
            <div className="label">Table: <span className="red">RED</span></div>
          </RedConfig>
          <BlueConfig
            onSubmit={makeSaver("bluetable")}
            initialValues={retrieve(
                "bluetable",
                {
                    n: 47,
                    x: 2,
                    m: 81,
                    d: 'rtl-up',
                    w: 40,
                }
            )}
          >
            <div className="label">Table: <span className="blue">BLUE</span></div>
          </BlueConfig>
          <GreenConfig
            onSubmit={makeSaver("greentable")}
            initialValues={retrieve(
                "greentable",
                {
                    n: 231,
                    x: 1,
                    m: 247,
                    d: 'ltr-up',
                    w: 30,
                },
            )}
          >
            <div className="label">Table: <span className="green">GREEN</span></div>
          </GreenConfig>
      </div>
    </div>
  );
}

export default App;
