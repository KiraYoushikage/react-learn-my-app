
import {useState} from 'react'

export default function CounterSizeGenerator(props){
    const {callBackSize}=props;
    const[size,setSize]=useState(props.size);
    // callBackSize(100);
    const onSizeChange=(event)=>{
        const size=Number(event.target.value);
        if(size>=0){
            setSize(size);
            callBackSize(size);
        }     
    }
    return (

        <>
        <label htmlFor="inputSize">请输入size：</label>
        <input id="inputSize" value={size} type="number" onChange={onSizeChange} ></input>
        </>
    ) ;
}