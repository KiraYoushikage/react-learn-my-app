
// import {useState} from 'react'


export default function CounterGroupSum(props){
    // const [sum]=useState(props.sum);
    return (
        <>
        <label htmlFor="counterGroupSum">所有的计算sum：</label>
        <span id="counterGroupSum">{props.sum}</span>
        </>
    )
}