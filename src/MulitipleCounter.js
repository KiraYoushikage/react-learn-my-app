import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

import {useState} from 'react'
import CounterGroupSum from "./CounterGroupSum";

export default function MulitipleCounter(props){
    const [size,setSize]=useState(props.size);
    const [sum,setSum]=useState(0);
    const callBackSize=(size)=>{
        setSize(size);
    }
    const callBackSum=(curSum)=>{
        console.log("curSum",curSum,sum);
        setSum(sum+curSum);
    }
    return (
        <>
            <CounterSizeGenerator size={size} callBackSize={callBackSize}/>
            <hr></hr>
            <CounterGroupSum sum={sum} ></CounterGroupSum>
            <hr></hr>
            <CounterGroup size ={size} callBackSum={callBackSum}/>
        </>
    )

}