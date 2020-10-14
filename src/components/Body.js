// import { render } from '@testing-library/react'
import React from 'react'
import '../App.css'
import Items from './Items'

class Body extends React.Component{
    constructor(){
        super()
        this.state= {
            count: 0,
        }
    }
    render(){   
        const liItems = [];
        const images = [require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),];
        const price = ["16,500","16,600","16,700","16,800","16,900"];
        const date = ["15 Sep","16 Sep","17 Sep","18 Sep","19 Sep"];
        const data = ["data1","data2","data3","data4","data5"];
        for (var i = 0; i < 5; i++){
            liItems[i] = <Items imageSource={images[i]}  price={price[i]} date={date[i]} data={data[i]}/>
        }
        // function loadMore(){
        //     console.log('yes working')
        //     let count = 0;
        //     const liItems = [];
        //     const images = [require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),];
        //     const price = ["16,500","16,600","16,700","16,800","16,900"];
        //     const date = ["15 Sep","16 Sep","17 Sep","18 Sep","19 Sep"];
        //     const data = ["data1","data2","data3","data4","data5"];
        //     for (var i = 0; i < 5; i++){
        //         liItems[i] = <Items imageSource={images[i]}  price={price[i]} date={date[i]} data={data[i]}/>
        //         return(
        //             <>
        //             {
        //                 liItems.map(liItems => 
        //                     <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15,}}>{liItems}</li>
        //                 )
        //             }
        //             </>
        //         )
        //     }
        // }
        return(
            <div className="container-tm">
                <div className="mainBody1">
                    <div className="featuredBody">
                        <div className="featuredText">
                            <h4>More on Mobile Phones</h4>
                            <a href="#"><strong>View More</strong></a>   
                        </div>
                        <div id="carouselExampleControls" class="carousel slide" data-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="fullCard "><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Branded Mobiles with best Quality"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                </div>
                                <div class="carousel-item">
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Branded Mobiles with best Quality"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                </div>
                                <div class="carousel-item">
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Branded Mobiles with best Quality"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="freshRecom" >
                        <span>Fresh recommendations</span>
                </div>
                <div className="mainBody2">
                    <div className="allProductsDiv">
                        <ul className="allProductsUl">
                            {
                            liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15,}}>{liItems}</li>
                            )
                            }
                            <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}><Items /></li>
                            {liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}>{liItems}</li>
                                )}
                            {liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}>{liItems}</li>
                                )}
                            {liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}>{liItems}</li>
                                )}
                            <li><button>LOAD MORE</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;