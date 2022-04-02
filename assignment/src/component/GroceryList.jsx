
export const GroceryList=({grocery,id,onSelect})=>{

    return(
        <div>
        <span>{grocery}</span><button onClick={()=>{
            onSelect(id)
        }}>Delete</button>
        </div>
    )
     
}