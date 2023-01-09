import React from 'react';
import './Plce.css';
class Listplaces  extends React.Component{
constructor(){
super();
}
render()
{
    return(
        <div className="Plce1">
        <h3>List of places to visit</h3>
        <ol>
    <li> Marina Beach </li>
    <li> Vandalur Zoo</li>
    <li> Express Avenue Mall </li>
    <li> MGM Dizee world</li>
    <li> Birla Planetarium </li>
    </ol>
</div>

    )
}
}

export default Listplaces;