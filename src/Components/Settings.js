import React from 'react';
import '../styles/settings.scss';

export const Settings = (props) => {
        
        function decreeCounter() {
            if(props.breakInterval === 1) return;
            props.decreaseBreak();
        }

        function increaseCounter() {
            if(props.breakInterval === 60) return;
            props.increaseBreak();
        }

        function decreaSession() {
            if(props.sessionLength === 5) return;
            props.decreaseSession();
        }

        function increaSession() {
            if(props.sessionLength === 60) return;
            props.increaseSession();
        }

        return (
          <div className="settings">

            <div className="settings-section">
              <label id="break-label">Break Length</label>
              <div>
                <button className="" id="break-decrement" onClick={decreeCounter}>-</button>
                    <span id="break-length">{props.breakInterval}</span>
                <button className="" id="break-increment" onClick={increaseCounter}>+</button>
              </div>
            </div>

            <div className="settings-section">
              <label id="session-label">Session Length</label>
              <div>
                <button className="" id="session-decrement" onClick={decreaSession}>-</button>
                    <span id="session-length">{props.sessionLength}</span>
                <button className="" id="session-increment" onClick={increaSession}>+</button>
              </div>
            </div>

          </div>
        )
     
}