import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Board from "./components/game/Board";
import LetterRack from "./components/game/LetterRack";
import Card from "./components/Card";

class App extends React.Component {
  render() {
    return (
      <div
        className="container-fluid">
        <div className="row">
          <h2>Discovery Scrabble</h2>
        </div>
        <div className="row">
          <div className="col9">
            <Board />
          </div>
          <div className="col3">
            <LetterRack />
            <Card text="Okayyy" />
          </div>
        </div>
      </div>
    );
  }
}

// export default App;

export default DragDropContext(HTML5Backend)(App);