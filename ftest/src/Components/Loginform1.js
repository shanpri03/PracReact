import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Dashboard from './Listplaces';
import Plce from './Plce.css';

 
function Loginform1() {
    const [fname , setName] = useState('');
    const [email , setEmail] = useState('');
    const [location , setLocation] = useState('');
    const handleChange =(e)=>{
      setName(e.target.value);
      
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleLocationChange =(e)=>{
      setLocation(e.target.value);
    }
    const handleSubmit=(e)=>{
        alert('Thanks and Welcome  "' + fname + '"');
    
      }
      
 
    
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <div className="Plce">
    <h1>Welcome to Priya's Blog!!</h1>
    <h4>Let's get connected.</h4>
        <h6>May I have your details</h6>
        <label >
          Name:
        </label><br/>
        <input type="text" value={fname} required onChange={(e) => {handleChange(e)}} /><br/>
        <label >
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
        <label>
          Location:
        </label><br/>
        <input type="text" value={location} required onChange={(e) => {handleLocationChange(e)}} /><br/>
        <input type="submit" value="Submit"/><br></br>

        <div>
          <h2>5 Super Fun places in Chennai to Hang Out</h2>
          <p>If you are in Chennai and if your weekends are only about watching a cricket match, relaxing at the 
            lazy couch or cooking something mouth-watering, this blog is about to change that. 
            You will find a number of fun places in Chennai at your disposal. </p>
            <br></br>

            <p>Here is a quick rundown of the fun activities that can be done with friends and family while you are in Chennai.
            Make sure to add your favorites to the bucket list.
          </p>
          
        </div>
  
      </div>
       
      </form>
    </header>
    
    </div>
  );
  
  
}
export default Loginform1;