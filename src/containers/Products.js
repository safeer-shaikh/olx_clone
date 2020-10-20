import React from 'react'
import './Products.css'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
// import { nodeName } from 'jquery';

class Products extends React.Component{
    render(){
        let liData = ["iphone x","laptop","iphone 7plus","honda 125","honda city","honda civic","mehran","toyota corolla","cultus","mobile"];
        let locations = ["Punjab (528663)","Sindh (246913)","Islamabad Capital territory(81882)","Khyber PakhtunKhwa(49781)","Balochistan(5907)"];
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
                        <div className="left-div">
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
                                        <a href="/items">All Categories</a>
                                    </div>
                                </div>
                            </div>
                            <div className="locations">
                                <div className="location-show">
                                    <button className="btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Locations<i className="fa fa-chevron-down"></i>
                                    </button>
                                    <span>Pakistan</span>
                                    <div className="dropdown-menu all-categories locations" aria-labelledby="dropdownMenu2">       
                                        <a href="/items" style={{margin: 0, color: "black", fontWeight: 600}}>Pakistan</a>
                                        {
                                            locations.map(locations =>
                                            <a href="#">{locations}</a>
                                                )
                                        }
                                        <a href="/items" style={{color: "#3a77ff"}}>View more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="catagories">
                                <div className="dropdown">
                                    <button className="btn" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Price<i className="fa fa-chevron-down"></i>
                                    </button>
                                    <span>All Categories</span>
                                    <div className="dropdown-menu all-categories price-input" aria-labelledby="dropdownMenu2">
                                        <input name="price-min" type="number" placeholder="Min" min='0' max='999999999' />
                                        <input name="price-max" type="number" placeholder="Max" min='0' max='999999999' />
                                        <button><i className="fa fa-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="right-div" style={{backgroundColor: 'orange'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Products;