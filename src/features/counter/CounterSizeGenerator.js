
import { useDispatch } from 'react-redux'
import { updateSize } from './counterSlice'
import { useSelector } from 'react-redux/es/exports';
export default function CounterSizeGenerator(){
    
    const dispatch=useDispatch();
    // callBackSize(100);
    const size=useSelector((state)=>state.counter.size)
    const onSizeChange=(event)=>{
        const size=Number(event.target.value);
        if(size>=0){
            dispatch(updateSize(size))
        }     
    }
    return (

        <>
        <label htmlFor="inputSize">请输入size：</label>
        <input id="inputSize" value={size} type="number" onChange={onSizeChange} ></input>
        </>
    ) ;
}