import Counter from "./Counter";


export default function CounterGroup(props){
    const {size} =props;
    const counterList=Array(size).fill(0);
    return (
        <>
        {
        counterList.map((item,index)=>{
        return (<><Counter key={index} /><hr/></>);
        })}
        </>
    );
}