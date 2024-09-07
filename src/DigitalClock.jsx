import { useState, useEffect } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12; // to not display hours in 13, 14, 15 i.e 13 % 12 is 1 so its 1 AM/PM

        return `${hours}:${minutes}:${seconds} ${meridiem}`;

    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>

        </div>
    );

}

export default DigitalClock;