import React, { useState } from "react";
import './Todolist.css'
const ListCom = (props)=>{
    const [line , setLine] = useState(false)
    const cutIt = ()=>{
        setLine(true)
    }
    return (
        <div className="todo_list">
        {/* <input type="checkbox"onClick={cutIt} id="scales" className="scales"
         checked></input> */}
         <input type="checkbox" onClick={cutIt} />
    <label for="subscribeNews"></label>
            {/* <span onClick={cutIt}>*</span> */}
            <li style={{textDecoration: line ?'line-through':'none'}}>{props.text}</li>
            <i class="fa-solid fa-star"></i>
        </div>
    )
}
export default ListCom