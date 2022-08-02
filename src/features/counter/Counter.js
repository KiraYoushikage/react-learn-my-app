import {useEffect,useRef} from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {useState} from 'react'
import { updateSum } from './counterSlice';

export default function Counter(props){
    const [num, setNum] = useState(0)
    const numRef=useRef(null)
    // const numRef={current:num};
    console.log("render",num,"index",props.index)
    const dispatch=useDispatch();
    const increment=()=>{
        setNum(num+1);
        dispatch(updateSum(1))
    }
    const decrement=()=>{
        setNum(num-1);
        dispatch(updateSum(-1))
    }
    useEffect(()=>{
        console.log("setNumRef")
        numRef.current=num;
    },[num]);
    useEffect(()=>{
        // do some requests
        console.log("上一次的num",num,"index",props.index) 
        
        return ()=>{
            const numNow=numRef.current;//缓存上一次的
            // const text=(num)=>{
            //     numNow=num;
            //     console.log("num",num)
            //     // return num
            // }
            // console.log(typeof setNum)
            // setNum(num=>text(num))
            console.log('return 里面的',numNow,"index",props.index);// Todo num值为啥是0,setNum没有更新到useEffect里面的
            dispatch(updateSum(-1*numNow)) //更新redux里面的sum值
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