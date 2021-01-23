import React, { useState } from 'react';
import Clock2 from './Clock2';
import Clocks from './Clocks';

const ChessClocks = () => {
    let seconds;
    const [paused1, setPaused1] = useState(true);
    const [paused2, setPaused2] = useState(true);
    const [time, setTime] = useState(seconds || 620);

    const pause1 = () => {
        setPaused1(true);
        setPaused2(false);
    };
    const pause2 = () => {
        setPaused2(true);
        setPaused1(false);
    };
    return (
        <>
            <div>
                <Clocks paused={paused1} seconds={time} pause={pause1} color={paused1 ? "yellow" : "blue"} />
                {/* <Clock2 /> */}
            </div>
            <div>
                <Clocks paused={paused2} seconds={time} pause={pause2} color={paused2 ? "yellow" : "blue"} />
            </div>
        </>
    );
};

export default ChessClocks;
