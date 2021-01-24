import React, { useState } from 'react';
import ChessTimeInput from './ChessTimeInput';
import Clocks from './Clocks';

const ChessClocks = () => {
    let seconds;
    const [paused1, setPaused1] = useState(true);
    const [paused2, setPaused2] = useState(true);
    const [time, setTime] = useState(seconds || 620);

    const getTime = (value) = > {
        setTime(value);
    };

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
            <ChessTimeInput getTime={getTime} />
            <div>
                <Clocks paused={paused1} seconds={time} pause={pause1} color={paused1 ? "yellow" : "blue"} />
            </div>
            <div>
                <Clocks paused={paused2} seconds={time} pause={pause2} color={paused2 ? "yellow" : "blue"} />
            </div>
        </>
    );
};

export default ChessClocks;
