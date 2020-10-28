// import { render } from '@testing-library/react'
import React from 'react'
import '../App.css'
import YourCard from './YourCard'
import Items from './Items'
import $ from 'jquery'
import {Link} from 'react-router-dom'

class Body extends React.Component{
    render(){   
        const liItems5 = [];
        const images5 = [require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),require('../images/phone1.jpg'),];
        const price5 = ["16,500","16,600","16,700","16,800","16,900"];
        const date5 = ["15 Sep","16 Sep","17 Sep","18 Sep","19 Sep"];
        const data5 = ["data1","data2","data3","data4","data5"];
        for (var i = 0; i < 5; i++){
            liItems5[i] = <Items imageSource={images5[i]}  price={price5[i]} date={date5[i]} data={data5[i]}/>
        }
        const liItems15 = [];
        const images15 = [];
        const price15 = [];
        const date15 = [];
        const data15 = [];
        for(var i = 0; i < 100; i++){
            liItems15[i] = <Items imageSource={images15[i]} price={price15[i]} date={date15[i]} data={data15[i]} />
        }
        return(
            <div className="container">
                <div className="mainBody1">
                    <div className="featuredBody">
                        <div className="featuredText">
                            <h4>More on Mobile Phones</h4>
                            <Link to="/items"><strong>View More</strong></Link>   
                        </div>
                        <div id="carouselExampleControls" className="carousel slide" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="fullCard ">
                                        <Items imageSource={require('../images/phone1.jpg')} price="Rs 16,999" date="Sep 15" data="Branded Mobiles with best Quality"/>
                                    </div>
                                    <div className="fullCard">
                                        <Items imageSource={require('../images/phone2.jpg')} price="Rs 13,999" date="Sep 18" data="Huawei mate 10 lite 4GB RAM" />
                                        </div>
                                    <div className="fullCard">
                                        <Items imageSource={require('../images/phone3.jpg')} price="Rs 18,999" date="3 Days Ago" data="moto one macro box packed" />
                                        </div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone4.jpg')} price="Rs 10,500" date="Sep 17" data="Huawei 6x 6gbrom 64gb ram" /></div>
                                </div>
                                <div className="carousel-item">
                                    <div className="fullCard"><Items imageSource={require('../images/phone5.jpg')} price="Rs 3,600" date="Oct 06" data="Vivo Y51 mobile on isntallment"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone6.jpg')} price="Rs 15,999" date="3 days ago" data="Honor 9 4gb 64gb" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone7.jpg')} price="Rs 49,999" date="Today" data="S9 samsung 6/64 full box" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone8.jpg')} price="Rs 73,000" date="Today" data="Iphone 7plus black" /></div>
                                </div>
                                <div className="carousel-item">
                                    <div className="fullCard"><Items imageSource={require('../images/phone9.jpg')} price="Rs 18,800" date="Oct 02" data="OPPO series"/></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone10.jpg')} price="Rs 6,500" date="Today" data="Qmobile i9 pro" /></div>
                                    <div className="fullCard"><Items imageSource={require('../images/phone11.jpg')} price="Rs 9,000" date="Today" data="Iphone 6 16gb gold color" /></div>
                                    <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone12.jpg')} price="Rs 158,500" date="7 Days Ago" data="Iphone 11 pro max" /></div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="freshRecom" >
                    <span>Fresh recommendations</span>
                </div>
                <div className="mainBody2">
                    <div className="allProductsDiv">
                        <ul id="content" className="allProductsUl">
                            {
                            liItems5.map((liItems5) => 
                                <li>{liItems5}</li>
                            )}
                            <li><YourCard /></li>
                            {
                            liItems15.map(liItems15 => 
                                <li>{liItems15}</li>
                            )}
                        </ul>
                        <div className="loadMoreLi">
                            <button className="loadMoreBtn">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;