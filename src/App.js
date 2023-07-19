import React, { Component } from "react";

export class App extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    intervalS: " ",
    btnDsb: false,
    interVal: [],
  };

  startBtn = () => {
    let timer = setInterval(() => {
      const { seconds, minutes, hours } = this.state;
      if (seconds == 59) {
        if (minutes == 59) {
          this.setState({
            seconds: 0,
            minutes: 0,
            hours: hours + 1,
          });
        } else {
          this.setState({
            seconds: 0,
            minutes: minutes + 1,
          });
        }
      } else {
        this.setState({
          seconds: seconds + 1,
        });
      }
    }, 1000);
    this.setState({
      btnDsb: true,
      intervalS: timer,
    });
  };

  stopBtn = () => {
    clearInterval(this.state.intervalS);
    this.setState({
      btnDsb: false,
    });
  };

  intervalBtn = () => {
    const { seconds, minutes, hours, interVal } = this.state;
    interVal.push(`${hours}:${minutes}:${seconds}`);

    this.setState({
      interVal: interVal,
    });
  };

  clearBtn = () => {
    this.stopBtn();

    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      interVal: [],
    });
  };

  render() {
    const { seconds, minutes, hours, btnDsb, interVal } = this.state;
    return (
      <div>
        <div className="container">
          <h1>
            <span>
              <i>Online </i>
            </span>
            StopWatch
          </h1>
          <div className="timer">
            <p className="hours">{hours}</p>
            <p className="title">hours</p>
          </div>
          <div className="timer">
            <p className="minutes">{minutes}</p>
            <p className="title">minutes</p>
          </div>
          <div className="timer">
            <p className="seconds">{seconds}</p>
            <p className="title">seconds</p>
          </div>
        </div>
        <div className="container">
          <button
            className="btn btn-green"
            onClick={this.startBtn}
            disabled={btnDsb}
          >
            Start
          </button>
          <button className="btn btn-red" onClick={this.stopBtn}>
            Stop
          </button>
          <button
            className="btn btn-succes"
            onClick={this.intervalBtn}
            disabled={!btnDsb}
          >
            Interval
          </button>
          <button className="btn btn-gold" onClick={this.clearBtn}>
            Clear
          </button>
        </div>
        <div className="conteiner-interval">
          {interVal.map((item, i) => {
            return (
              <p>
                {i + 1}.=&gt;{item}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
