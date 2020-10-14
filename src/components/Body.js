// import { render } from '@testing-library/react'
import React from 'react'
import '../App.css'
import Items from './Items'

class Body extends React.Component{
    render(){
        return(
            <div className="container-tm">
                <div className="mainBody">
                    <div className="featuredBody">
                        <div className="featuredText">
                            <h4>More on Mobile Phones</h4>
                            <a href="#"><strong>View More</strong></a>   
                        </div>
                        {/* <div>
                            <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Branded Mobiles with best Quality"/></div>
                            <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                            <div className="fullCard"><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                            <div className="fullCard" style={{marginRight: 15}}><Items imageSource={require('../images/phone1.jpg')} price="Rs 16,499" date="15 Sep" data="Mobile Phone" /></div>
                        </div> */}
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
                    <div>
                        <div>
                            <span>FRESH RECOMMENDATION</span>
                        </div>
                        <div>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;