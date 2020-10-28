import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
class YourCard extends React.Component{
    render(){
        return(
            <div className="myCard">
                <Link to="/items">
                    
                    <h6>Want to see your stuff here?</h6>
                    <p>Make some extra cash by selling things in your community. Go on, its quick and easy</p>
                    <button className="startsellingBtn" >Start Selling</button>
                    
                </Link>
            </div>    
        )
    }
}
export default YourCard;