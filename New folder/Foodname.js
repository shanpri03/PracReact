import React from 'react'

class Foodname extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Prashant",
            age: "27",
            num:1
        }
        this.somexyz = {
            val1: "PK"
        }
    }
    changePerson = () => {
        console.log("Pressed the button")
        this.setState({
            name: "Nitin",
            age: "25"
        })
    }

    render = () => {
        return(
            <>
            <h1>My name is {this.state.name} and I am {this.state.age}. Other value {this.somexyz.val1}</h1>
            <p>Number: {this.state.num}</p>
            <button type='button' onClick={this.changePerson}>Change Person</button>
            
            </>
        )
    }
}

export default Foodname;