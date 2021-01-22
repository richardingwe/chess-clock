import React from 'react';
import ReactCountdownClock from "react-countdown-clock";

const Clocks = ({ seconds, paused, pause, color }) => {
    const onComplete = () => {

    };
    return (
        <div onClick={pause}>
            <ReactCountdownClock seconds={seconds}
                color={color}
                alpha={0.9}
                size={300}
                paused={paused}
                onComplete={onComplete} />
        </div>
    );
};

export default Clocks;
