export function ElementList({title,checked}){
    const [check,setCheck]=useState(checked)
  return(
    <>
    <li>{title}<input type="checkbox" checked={check===false?false:true} onClick={()=>setCheck(!check)} /></li>
    </>
  )
}