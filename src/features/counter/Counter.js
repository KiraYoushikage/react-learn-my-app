import {useEffect} from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {useState} from 'react'
import { updateSum } from './counterSlice';

export default function Counter(){
    const [num, setNum] = useState(0)
    const dispatch=useDispatch();
    const increment=()=>{
        setNum(num+1);
        dispatch(updateSum(1))
    }
    const decrement=()=>{
        setNum(num-1);
        dispatch(updateSum(-1))
    }
    const getDispatch=()=>{
        return dispatch;
    }
    const getNum=()=>{
        return num;
    }
    useEffect(()=>{
        // do some requests
        return ()=>{
            // const action=initAction();
            console.log('销毁后',num);// Todo num值为啥是0,setNum没有更新到useEffect里面的
            dispatch(updateSum(-1*num))
        };
    },[])
    const onChangeNum=(event)=>{
        console.log("onchangeNum",event.target.value)
        setNum(Number(event.target.value));
    }
    return (
        <>
        <button onClick={increment}>+</button>
        <input value={num} type={"number"}
        onChange={onChangeNum}>
        </input>
        <button onClick={decrement}>-</button>
        </>
    )


}