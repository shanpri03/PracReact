import './Itemcolor.css';
/*import './Nvegcolor.css';*/
function Menu(props) {
    const buy = () => {
        alert("Item has been purchased")
    }
    
    if (props.type == "veg" || props.type =="cold") {
        return (
            <div >
                
                <p class = "veg">

                
                {props.type} -- {props.item}------- INR  {props.price}   <button onClick={buy}> Buy Now</button>
                     
                </p>
            </div>
        )
    }
    else {
        return (
            <div  >
                
                <p class = "non-veg">
                
                {props.type} -- {props.item}------- INR  {props.price}  <button onClick={buy}> Buy Now</button>
                     
                </p>
            </div>
        )
    }

    }    export default Menu;