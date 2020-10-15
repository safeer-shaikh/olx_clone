// import { render } from '@testing-library/react'
import React from 'react'
import '../App.css'
import YourCard from './YourCard'
import Items from './Items'

class Body extends React.Component{
    render(){   
        const liItems = [];
        const images = [require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),];
        const price = ["16,500","16,600","16,700","16,800","16,900"];
        const date = ["15 Sep","16 Sep","17 Sep","18 Sep","19 Sep"];
        const data = ["data1","data2","data3","data4","data5"];
        for (var i = 0; i < 5; i++){
            liItems[i] = <Items imageSource={images[i]}  price={price[i]} date={date[i]} data={data[i]}/>
        }
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
                                    <div className="fullCard "><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,999" date="Sep 15" data="Branded Mobiles with best Quality"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone2.jpg')} price="Rs 13,999" date="Sep 18" data="Huawei mate 10 lite 4GB RAM" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone3.jpg')} price="Rs 18,999" date="3 Days Ago" data="moto one macro box packed" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone4.jpg')} price="Rs 10,500" date="Sep 17" data="Huawei 6x 6gbrom 64gb ram" /></div>
                                </div>
                                <div class="carousel-item">
                                    <div className="fullCard"><Items imageSource={require('../images/phone5.jpg')} price="Rs 3,600" date="Oct 06" data="Vivo Y51 mobile on isntallment"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone6.jpg')} price="Rs 15,999" date="3 days ago" data="Honor 9 4gb 64gb" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone7.jpg')} price="Rs 49,999" date="Today" data="S9 samsung 6/64 full box" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone8.jpg')} price="Rs 73,000" date="Today" data="Iphone 7plus black" /></div>
                                </div>
                                <div class="carousel-item">
                                    <div className="fullCard"><Items imageSource={require('../images/phone9.jpg')} price="Rs 18,800" date="Oct 02" data="OPPO series"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone10.jpg')} price="Rs 6,500" date="Today" data="Qmobile i9 pro" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone11.jpg')} price="Rs 9,000" date="Today" data="Iphone 6 16gb gold color" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone12.jpg')} price="Rs 158,500" date="7 Days Ago" data="Iphone 11 pro max" /></div>
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
                            )}
                            <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15, backgroundColor: "blue",}}><YourCard /></li>
                            {
                            liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}>{liItems}</li>
                            )}
                            {
                            liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}>{liItems}</li>
                            )}
                            {
                            liItems.map(liItems => 
                                <li style={{display: "inline-block",marginLeft: 15 , width: 285, marginTop: 15}}>{liItems}</li>
                            )}
                            <li className="loadMoreLi"><button className="loadMoreBtn">Load More</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;