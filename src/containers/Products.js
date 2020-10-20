import React from 'react'
import './Products.css'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
// import { nodeName } from 'jquery';

class Products extends React.Component{
    render(){
        let liData = ["iphone x","laptop","iphone 7plus","honda 125","honda city","honda civic","mehran","toyota corolla","cultus","mobile"];
        return(
            <div>
                <Header />
                <SubHeader />
                <div className="body-products">
                    <div className="container">
                        <div className="productsSubHeader">
                            <ul className="products-subHeader-ul" >
                                <li style={{fontWeight: 600, listStyleType: "none", fontSize: 12, padding: 6}}>Popular Searches:</li>
                                {
                                    liData.map((liData) => 
                                    <span className="span-li-map">
                                        <li><a href="#">{liData}</a></li><span>-</span>
                                    </span>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="home-div container-tm" >
                        <ol>
                            <li><a href="/">Home</a></li>
                        </ol>
                    </div>
                    <div className="heading">
                        <h1>Pakistan Free classifieds</h1>
                    </div>
                    <div className="both-divs" >
                        <div className="left-div" >
                            <div>
                                <div className="filter">
                                    <div><span>Filters</span></div>
                                </div>
                            </div>
                            <div className="catagories">
                                <div className="dropdown">
                                    <button className="btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories<i className="fa fa-chevron-down"></i>
                                    </button>
                                    <span>All Categories</span>
                                    <div className="dropdown-menu all-categories" aria-labelledby="dropdownMenu2">
                                        <a href="#">All Categories</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-div" style={{backgroundColor: 'orange'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Products;