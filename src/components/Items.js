import { contains } from 'jquery';
import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
class Items extends React.Component{
    render(){
        return(
            <div className="card">
                <Link to="/items">
                    <div className="pictureDiv">
                        <figure className="picture">
                            <span>Featured</span>
                            <img src={this.props.imageSource} />
                        </figure>

                    </div>
                    <div className="allData">
                        <span className="price">{this.props.price}</span>
                        <span className="data">{this.props.data}</span>
                        <div className="date">
                            <span>
                                <span>{this.props.date}</span>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Items;