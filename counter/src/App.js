import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      hasError: false
    }
  }

  setCounter(num) {
    const newCounter = this.state.counter + num
    if (newCounter < 0) {
      this.setState({ hasError: true })
    } else {
      this.setState({ hasError: false, counter: newCounter})
    }
  }

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The Counter is currently: {this.state.counter}
        </h1>
        <button onClick={e => this.setCounter(1)}data-test='increment-button'>
          Increment Counter
        </button>
        <button onClick={e => this.setCounter(-1)}data-test='decrement-button'>
          Decrement Counter
        </button>
        {this.state.hasError ? <p data-test='error-display'>The Counter cannot go below zero!</p> : null}
      </div>
    )
  }
}

export default App;
