import React, { Component } from 'react';
import './App.scss';

import { Settings } from './Components/Settings';
import Timer from './Components/Times';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1
      }
    })
  }

  onDecreasessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 5
      }
    })
  }

  onIncreasessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 5
      }
    })
  }

  render() {
    return (
      <div className="pomodoro-clock">
        <div className="pomodoro-clock__header">
          <h1 className="pomodoro-clock__header-name">
            Pomodoro CLock
          </h1>
        </div>

        <Settings 
          breakInterval={this.state.breakLength}
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
          
          sessionLength={this.state.sessionLength}
          increaseSession={this.onIncreasessionLength}
          decreaseSession={this.onDecreasessionLength}

        />

        <Timer timerMinute={this.state.timerMinute}/>
      </div>
    );
  }
}

