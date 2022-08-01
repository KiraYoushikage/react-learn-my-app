import {useState,useEffect} from 'react'

export default function Counter(props){
    const [num, setNum] = useState(0)
    const {callBackSum}=props;
    const increment=()=>{
        setNum(num+1);
        callBackSum(1);
    }
    const decrement=()=>{
        setNum(num-1);
        callBackSum(-1);
    }

    useEffect(()=>{
        // do some requests
        return ()=>{
            callBackSum(-1*num);
            console.log('销毁后');
        }
    })

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