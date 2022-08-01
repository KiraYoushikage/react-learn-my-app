import {useState} from 'react'

export default function Counter(){
    const [num, setNum] = useState(0)

    const increment=()=>{
        setNum(num+1);
    }
    const decrement=()=>{
        setNum(num-1);
    }


    return (
        <>
        <button onClick={increment}>+</button>
        <input value={num} type={"number"}
        onChange={(event)=>{setNum(Number(event.target.value));}}>
        </input>
        <button onClick={decrement}>-</button>
        </>
    )


}