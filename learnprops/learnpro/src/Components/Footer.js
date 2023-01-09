import React from 'react'
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render = () => {
        return (
            <>
            <h3>Thanks for visiting!!<br></br>
            {this.props.name}</h3>
            </>
        )
    }

    
}
export default Footer;