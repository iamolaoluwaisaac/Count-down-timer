import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import "@leenguyen/react-flip-clock-countdown/dist/index.css"
import VideoBg from "../src/assets/production ID_3678399.mp4"
import "./styles.css"

const App = () => {
  return <section className="page">

    <div className="overlay"></div>

    <video src={VideoBg} autoPlay loop muted></video>

    <div className="page-content">
      {/* <h1>Launching Soon</h1> */}
      <h1>This is a Bayode Victor Project.<br></br>I will be launching in the next 15 days</h1>
      <h3>
        Kindly Leave your email and we will let you know once the site goes live.
      </h3>

            <FlipClockCountdown
        to={new Date().getTime() + 360 * 3600 * 1000 + 5000}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
        digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
        dividerStyle={{ color: 'white', height: 1 }}
        separatorStyle={{ color: 'red', size: '6px' }}
        duration={0.5}
      ></FlipClockCountdown>

      <button className="btn">
        Notify Me
      </button>

    </div>

  </section>
};

export default App;
