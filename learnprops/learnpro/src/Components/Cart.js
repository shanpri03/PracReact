import { useState } from "react";
function Cart()
{
    const [numbr,setNumbr] =useState(1)
    const [name,setName] = useState("Priya")
    return(

        <>
        <h1>Fun Number: {numbr}</h1>
        <button onClick={()=> setNumbr(numbr+1)}>
            Increase</button>
            <button onClick={()=> setNumbr(numbr-1)}>
            Decrease</button>
        <h1>Fun Name: {name}</h1>

            <button onClick={()=> setName("Shan")}>
            Change Name</button>
        </>
        
    )
}
export default Cart;


