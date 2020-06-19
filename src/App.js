import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="simpleslide100">
        <div className="simpleslide100-item bg-img1" style={{ backgroundImage: "url('/assets/images/bg01.jpg')" }} ></div>
        <div className="simpleslide100-item bg-img1" style={{ backgroundImage: "url('/assets/images/bg02.jpg')" }} ></div>
        <div className="simpleslide100-item bg-img1" style={{ backgroundImage: "url('/assets/images/bg03.jpg')" }} ></div>
      </div>

      <div className="size1 overlay1">
        <div className="size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
          <h3 className="l1-txt1 txt-center p-b-25">
            Coming Soon
        </h3>

          <p className="m2-txt1 txt-center p-b-48">
            Our website is under construction, follow us for update now!
        </p>

          <div className="flex-w flex-c-m cd100 p-b-33">
            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 days">35</span>
              <span className="s2-txt1">Days</span>
            </div>

            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 hours">17</span>
              <span className="s2-txt1">Hours</span>
            </div>

            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 minutes">50</span>
              <span className="s2-txt1">Minutes</span>
            </div>

            <div className="flex-col-c-m size2 bor1 m-l-15 m-r-15 m-b-20">
              <span className="l2-txt1 p-b-9 seconds">39</span>
              <span className="s2-txt1">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
