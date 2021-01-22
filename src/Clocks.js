import React from 'react';
import ReactCountdownClock from "react-countdown-clock";

const Clocks = () => {
    const onComplete = () => {

    };
    return (
        <div>
            <ReactCountdownClock seconds={180}
                color="#000"
                alpha={0.9}
                size={300}
                onComplete={onComplete} />
        </div>
    );
};

export default Clocks;
