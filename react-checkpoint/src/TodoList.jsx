import { useEffect, useState } from "react";

export function TodoList(){
    const [data,setData] = useState([])
    const [err,setErr] = useState("")
   
    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((res)=>res.json())
    .then((res)=>setData(res))

    .catch((err)=>setErr(err))},
    [])

    function handleChangechecked(e){
        setData()
    }
    const dataJSX = data.map((element)=><li>{element.title}<input type="checkbox" checked={element.completed===false?false:true} onClick={handleChangechecked} /></li>)
    return (<>
       <ul>
        {dataJSX}
       </ul>
         
    </>)
}