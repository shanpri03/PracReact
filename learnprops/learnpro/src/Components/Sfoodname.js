import React from 'react'

class Sfoodname extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "Priya",
            age: "29",
            num:1
        }
        this.somexyz = {
            val1: "SP"
        }
    }
    changePerson = () => {
        console.log("Pressed the button")
        this.setState({
            name: "Shan",
            age: "23"
        })
    }
    changeNum = () => {
        console.log("Pressed the button")
        this.setState({
            num : this.state.num+1
        })
    }

    render = () => {
        return(
            <>
            <h1>My name is {this.state.name} and I am {this.state.age}. Other value {this.somexyz.val1}</h1>
            <button type='button' onClick={this.changePerson}>Change Person</button>
            <p>Number: {this.state.num}</p>
            <button type='button' onClick={this.changeNum}>Increment Number</button>
            
            </>
        )
    }
}

export default Sfoodname;