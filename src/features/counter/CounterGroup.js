import Counter from "./Counter";

import { useSelector } from 'react-redux'
export default function CounterGroup(){

    const size=useSelector((state)=>state.counter.size)
    const counterList=Array(size).fill(0);

    return (
        <>
        {
        counterList.map((item,index)=>{
        return (<div key={index}>
                <Counter index={index}/><hr/>
        </div>);
        })}
        </>
    );
}