function Customerform()
{
    return(
        <div>
            <h1>Customer Form</h1>
            <form>
            <label> Enter your first name: </label>
                    <input type ="text" name="name1" /><br></br>    
                    <label> Enter your last name: </label>
                    <input type ="text" name="name2" />
                
                <input type ="submit" value="submit"/>         
            </form>

        </div>
    );
    }
export default Customerform;