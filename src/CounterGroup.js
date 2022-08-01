import Counter from "./Counter";


export default function CounterGroup(props){
    const {size,callBackSum} =props;
    const counterList=Array(size).fill(0);


    return (
        <>
        {
        counterList.map((item,index)=>{
        return (<div key={item+index}>
                <Counter callBackSum={callBackSum}/><hr/>
        </div>);
        })}
        </>
    );
}