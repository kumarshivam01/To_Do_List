import React, { useState } from "react";
import ListCom from "./ListCom";
import './Todolist.css'
const Todolist = ()=>{
    const [item, setitem]=useState("");
    const[updatedItem, setupdatedItem]=useState([])
    const itemEvent = (event)=>{
        setitem(event.target.value)
    }
    const listofitem = ()=>{
        setupdatedItem((prevValue)=>{
            return [...prevValue,item]
        });
        setitem(" ")
    }
    return (
        <>
        <div className="main">
            <div className="nav-bar">
                <div><button onClick={listofitem}>+</button></div>
                <div><input type="text" value={item} placeholder="Add a to-do..." onChange={itemEvent}/></div>
            </div>
            <div className="todo_list">
            <ol>
                {updatedItem.map((val,index)=>{
                    return <> <ListCom key={index} text={val}/></>
                })}
            </ol>
            </div>
        </div>
            {/* <input type="text" value={item} placeholder="add on item" onChange={itemEvent}/> */}
            {/* <button onClick={listofitem}>+</button> */}
            
        </>
    )
}

export default Todolist