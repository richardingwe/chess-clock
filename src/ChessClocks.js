import React, { useState } from 'react';
import Clocks from './Clocks';

const ChessClocks = () => {
    let seconds;
    const [paused1, setPaused1] = useState(true);
    const [isRunning1, setIsRunning1] = useState(true);
    const [isRunning2, setIsRunning2] = useState(false);
    const [paused2, setPaused2] = useState(true);
    const [time, setTime] = useState(seconds || 120);

    const pause1 = () => {
        setPaused1(true);
        setPaused2(false);
        // if (paused2) {
        //     setPaused2(false);
        // } else if (!paused2) {
        //     setPaused1(true);
        // }

        // }

        // setPaused1(!paused1);
        // if (isRunning1)
        // setPaused2(!paused1);
    };
    const pause2 = () => {
        setPaused2(true);
        setPaused1(false);
    };
    return (
        <div>
            <Clocks paused={paused1} seconds={time} pause={pause1} color={paused1 ? "yellow" : "blue"} />
            <Clocks paused={paused2} seconds={time} pause={pause2} color={paused2 ? "yellow" : "blue"} />
        </div>
    );
};

export default ChessClocks;
