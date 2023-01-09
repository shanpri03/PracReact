import './Itemlist.css';
function Itemlist(){
    return(
<div> 
    <h3 > List of items </h3>
    

    
    <div>
        <table border = "1" >
    
        <tr  >
                <th> Item No </th>
                <th> Item name </th>
                <th> Item Price </th>
            </tr>
            <tr> 
                <td>1</td>
                <td>Chicken Biryani</td>
                <td>Rs.120</td>
            </tr>
            <tr > 
                <td>2</td>
                <td>Mutton Biryani</td>
                <td>Rs.140</td>
            </tr>
           
            <tr> 
                <td>3</td>
                <td>Egg Biryani</td>
                <td>Rs.100</td>
            </tr>
           
        </table>
    </div>
</div>
    );
}
export default Itemlist;