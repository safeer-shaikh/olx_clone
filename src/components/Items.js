import React from 'react'
import '../App.css'
 class Items extends React.Component{
     render(){
         return(
            // <div className="container">
                <div className="card">
                    <a href="#">
                        <div className="pictureDiv">
                            <figure className="picture"><img src={this.props.imageSource} /></figure>
                        </div>
                        <div className="allData">
                           {/* <div className="featuretag">
                                <label>
                                    <span >Featured</span>
                                </label>
                            </div> */}
                            <span className="price">{this.props.price}</span>
                            <span className="data">{this.props.data}</span>
                            <div className="date">
                                <span>
                                    <span>{this.props.date}</span>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            // </div>
         )
     }
 }
 export default Items;