import React, { useEffect, useState } from 'react';
import Card from './Card';
import useCounter from './hooks/use-counter';

const BackwardCounter = () => {
    const counter = useCounter(false)
    // const[counter,setCounter] = useState(0);
    // useEffect(()=>{
    //     const timer = setInterval(()=>{
    //         setCounter((prev=>{return prev-1}))
    //     },1000)
    //     return()=> clearInterval(timer)
    // },[])
    return (
        <Card>
            {counter}
            
        </Card>
    );
};

export default BackwardCounter;