import React, { useState, useEffect, useCallback } from 'react';

function Timer () {
    const [remainingTime, setRemainingTime] = useState('');

    useEffect(() =>{

        // 자정을 기준
        const countdownDate = new Date();
        countdownDate.setHours(0, 0, 0, 0);
        countdownDate.setDate(countdownDate.getDate() + 1);
        countdownDate.setSeconds(countdownDate.getSeconds() - 1);

        const updateTimer = () =>{
            const now = new Date().getTime();
            const distance = countdownDate - now; 
            // 자정에서 현재 시간빼기

            // 1초 = 1000ms
            // const hours = Math.floor(distance / (1000 * 60 * 60));
            // const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const hours = now.getHours();

            if (seconds === 0) {
                console.log('아.. 내 1분.. 시간 순삭이네..');
            }

            setRemainingTime(`${hours} : ${minutes} : ${seconds}`);
        };

        const timer = setInterval(updateTimer, 1000);

        return () => {
            clearInterval(timer);
    };
        }, []);


        const timerStyle = {
            textAlign: 'left',
            lineHeight: '2',
            };
            
            return (
                <>
                <h1 style={timerStyle}>
                    오늘이<br />
                    {remainingTime}<br />
                    밖에 안남았다니..
                </h1>
                </>
            );
            

}

export default Timer;