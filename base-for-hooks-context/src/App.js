import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input';

import { getSecretWord } from './actions/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <Input getSecretWord={this.props.getSecretWord} />
      </div>
    )
  }
}

const mapStateToProps = ({ success, guessedWords }) => {
  return { success, guessedWords };
}
export default connect(mapStateToProps, { getSecretWord })(App)
