import React, { useEffect, useState } from 'react';

const CountdownTimer = () =>{
    const [count, setCount] = useState(10);

    useEffect(()=>{
        const interval = setInterval( () => {
            setCount(prevCount => prevCount - 1)
        }, 1000);

        if(count === 0) {clearInterval(interval)};

        return() => clearInterval(interval); 
    }, [count])

    return(
        <div>
            <p>Время: {count}</p>
        </div>
    )
}

export default CountdownTimer;