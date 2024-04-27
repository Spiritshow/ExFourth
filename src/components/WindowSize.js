import React, { useEffect, useState } from "react";

const WindowSize = () =>{
    const [size, setSize] =  useState([window.innerHeight, window.innerWidth])

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener("resize", updateSize);
    },[]);

    return(
        <div>
            <p>Высота: {size[0]}, Ширина: {size[1]} </p>
        </div>
    )
}

export default WindowSize;