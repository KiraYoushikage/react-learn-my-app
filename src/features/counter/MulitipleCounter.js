import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";


import CounterGroupSum from "./CounterGroupSum";
export default function MulitipleCounter(){
    return (
        <>
            <CounterSizeGenerator/>
            <hr></hr>
            <CounterGroupSum />
            <hr></hr>
            <CounterGroup />
        </>
    )

}