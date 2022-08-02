
import { useSelector } from "react-redux/es/exports"
export default function CounterGroupSum(){
    const sum =useSelector((state)=>state.counter.sum)
    return (
        <>
        <label htmlFor="counterGroupSum">所有的计算sum：</label>
        <span id="counterGroupSum">{sum}</span>
        </>
    )
}