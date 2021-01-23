import React from 'react';
import ReactSvgTimer from 'react-svg-timer';

const Clock2 = ({ seconds, paused, pause, color }) => {
    // let timer = 0;
    // let [resetRequested, setResetRequested] = useState(false);
    // let [timerIsComplete, setTimerIsComplete] = useState(false);
    // let [logMilliseconds, setLogMilliseconds] = useState(true);



    return (

        <ReactSvgTimer
            timerCount={6}
            countdownColor="#00ffa8"
            innerColor="#fff"
            outerColor="#000"
        // resetTimer={onReset}
        // completeTimer={onComplete}
        // resetTimerRequested={resetRequested}
        // timerDuration={timerValue}
        // displayCountdown={displayCountdown}
        />

    );
};

export default Clock2;
