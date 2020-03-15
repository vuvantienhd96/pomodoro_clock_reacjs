import React from 'react';
import '../styles/timers.scss';
class Timer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0
        };
    }

    render() {
        return (
            <>
            <section className="timers">
                <section className="timers-content">
                    <h4>{this.state.isSession ? "Session" : "Break"}</h4>
                    <label className="timer-label">{this.props.timerMinute}</label>
                    <span>:</span>
                    <span className="timer-left">{ 
                        this.state.timerSecond === 0 ? "00" :
                        this.state.timerSecond < 10 ? "0" + this.state.timerSecond :
                        this.state.timerSecond}
                    </span>
                </section>
            </section>

            <section className="controller">
                    <button id="start_stop" >
                    {this.props.isStart ? 'Stop' : 'Start'}
                    </button>
                    <button id="reset">Stop</button>
                    <button id="reset">Reset</button>
            </section>
            </>
        );
    }
}
export default Timer;