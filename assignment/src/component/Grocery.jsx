import { useState } from "react"
import { GroceryList } from "./GroceryList"
import { GroceryInput } from "./GroceryInput"
export const Grocery=()=>{
 const [grocerys,setgrocery]=useState([]);
 const addGrocery=(data)=>{
        
        setgrocery((olditem)=>{
            return [...olditem,data]
        })
  }
 const DeleteItem=(data)=>{
        setgrocery((olditem)=>{
            return olditem.filter((arry,index)=>{
                return index!==data
            })
        })
     }
 return(
        <div>
        <GroceryInput addGrocery={addGrocery}/>
        {grocerys.map((e,index)=>(
            <GroceryList key={index} id={index} grocery={e} onSelect={DeleteItem}/>
        ))}
    </div>
    )
  
}