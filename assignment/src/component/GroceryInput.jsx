import { useState } from "react"

export const GroceryInput=({addGrocery})=>{
    let[name,setName]=useState("");
     return(
        <div>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value); 
            }} />
            <button onClick={()=>{
                
                addGrocery(name);
                setName("")
                
            }}>Add Item</button>
        </div>
    )
}