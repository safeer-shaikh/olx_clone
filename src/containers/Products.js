import React from 'react'
import './Products.css'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Items from '../components/Items'
import YourCard from '../components/YourCard'
import SubFooter from '../components/SubFooter'
import Footer from '../components/Footer'
// import { nodeName } from 'jquery';

class Products extends React.Component{
    render(){
        let liData = ["iphone x","laptop","iphone 7plus","honda 125","honda city","honda civic","mehran","toyota corolla","cultus","mobile"];
        let locations = ["Punjab (528663)","Sindh (246913)","Islamabad Capital territory(81882)","Khyber PakhtunKhwa(49781)","Balochistan(5907)"];
        const liItems6 = [];
        const images6 = [];
        const price6 = [];
        const date6 = [];
        const data6 = [];
        for(var i = 0; i < 6; i++){
            liItems6[i] = <Items imageSource={images6[i]} price={price6[i]} date={date6[i]} data={data6[i]} />
        }
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
                        </div>
                        <div className="right-div" >
                            <div className="text">
                                <p>905,942 ads in <b>Pakistan</b></p>
                                <div style={{display: "flex"}} >
                                    <div className="functionality-div1">
                                        <span>View</span>
                                        <button><i class="fa fa-bars"></i></button>
                                        <button><i class="fa fa-th-large"></i></button>
                                        <button><i class="fa fa-tv-alt"></i></button>
                                    </div>
                                    <div className="functionality-div2" >
                                        <div>
                                            <button>
                                            <span style={{textTransform: "uppercase", fontWeight: 600, fontSize: 14}}>Sort By</span>
                                            <span style={{fontSize: 14}}>: Newly listed</span>
                                            <i className="fa fa-chevron-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <ul>
                                    {
                                        liItems6.map(liItems6 => 
                                            <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}} >{liItems6}</li>
                                        )
                                    }
                                    <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}><YourCard /></li>
                                    {
                                        liItems6.map(liItems6 => 
                                            <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}} >{liItems6}</li>
                                        )
                                    }
                                    {
                                        liItems6.map(liItems6 => 
                                            <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}} >{liItems6}</li>
                                        )
                                    }
                                    <div className="loadMoreLi">
                                        <button className="loadMoreBtn">Load More</button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <SubFooter />
                <Footer />
            </div>
        )
    }
}
export default Products;