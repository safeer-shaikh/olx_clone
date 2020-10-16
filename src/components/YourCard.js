import React from 'react'
import '../App.css'

class YourCard extends React.Component{
    render(){
        return(
            <div className="myCard">
                <a href="#">
                    
                    <h6>Want to see your stuff here?</h6>
                    <p>Make some extra cash by selling things in your community. Go on, its quick and easy</p>
                    <button className="startsellingBtn" >Start Selling</button>
                    
                </a>
            </div>    
        )
    }
}
export default YourCard;