import './Plce.css';
function Plce(props) 
    {

        return (
            <div className="Descpic" >
                
                <p >
                Location Name : {props.place} <br></br>
                Description about the place : {props.desc} <br></br>
                Timings of the site : {props.timings} <br></br>
                Location of the site : {props.location}  <br></br>
                Fun activities at the site : {props.fun}
                     
                </p>
            </div>
        )
    }

       export default Plce;