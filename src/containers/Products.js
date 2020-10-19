import React from 'react'
import './Products.css'
import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import { nodeName } from 'jquery';

class Products extends React.Component{
    render(){
        let liData = ["iphone x","laptop","iphone 7plus","honda 125","honda city","honda civic","mehran","toyota corolla","cultus","mobile"];
        return(
            <div>
                <Header />
                <SubHeader />
                <div>
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
                </div>
            </div>
        )
    }
}
export default Products;