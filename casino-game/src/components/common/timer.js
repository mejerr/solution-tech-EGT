

import React, { memo } from 'react'
import { useState, useEffect } from 'react';
import { timerCounter } from '../../utils/timer';

const Timer = memo((props) => {
    const { onFinish } = props;
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] =  useState(3);

    useEffect(()=> {
        let myInterval = timerCounter({ minutes, seconds, setMinutes, setSeconds, onFinish });

        return () => {
            clearInterval(myInterval);
          };
    }, [minutes, seconds, setMinutes, setSeconds, onFinish]);

    return (
        <div className="timer-container">
        {minutes === 0 && seconds === 0
            ? <>Loader</>
            : <div className="time">{minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</div>
        }
        </div>
    )
});

Timer.defaultProps = {
    onFinish: () => {}
};

export default Timer;