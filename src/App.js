import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/CounterFunctionsComponent';
import Button from './Components/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commonCount: 0
    }
  }

  handlePlus = () => {
    this.setState(
      { commonCount: this.state.commonCount + 1 }
    )
  }

  handleMinus = () => {
    this.setState(
      {
        commonCount:
          this.state.commonCount > 0
            ? this.state.commonCount - 1
            : this.state.commonCount
      }
    )
  }

  render() {
    console.log(this.state.commonCount);
    return (
      <div className="App">
        <Counter commonCount={this.state.commonCount} />
        <Counter commonCount={this.state.commonCount} />
        <Counter commonCount={this.state.commonCount} />
        {/** I create two buttons that will handle a common count of the all counters */}
        <Button name="+ for all counters" onClick={this.handlePlus} />
        <Button name="- for all counters" onClick={this.handleMinus} />
      </div>
    );
  }
}

export default App;