import React, { Component } from 'react';
import './App.css';

import GuessedWords from './GuessedWords'
import Congrats from './Congrats'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[
          { gussedWord: 'train', letterMatchCount: 3 }
        ]} />
      </div>
    )
  }
}
export default App;
