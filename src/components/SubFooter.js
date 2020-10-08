import React from 'react'
import AppStoreLogo from '../images/AppStoreLogo.png'
import GooglePlayStoreLogo from '../images/GooglePlayStoreLogo.png'
class SubFooter extends React.Component{
    render(){
        return(
            <div className="mainSubFooter">
                <section>
                    <span className="justheading" >POPULAR CATEGORIES</span>
                    <ul className="ulSubFooter">
                        <li>Cars</li>
                        <li>Flat for rent</li>
                        <li>Jobs</li>
                        <li>Mobile Phones</li>
                    </ul>
                </section>
                <section> 
                    <span className="justheading">TRENDING SEARCH</span>
                    <ul className="ulSubFooter">
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                        <li>Dogs</li>
                    </ul>
                </section>
                <section> 
                    <span className="justheading">ABOUT US</span>
                    <ul className="ulSubFooter">
                        <li>About OLX Group</li>
                        <li>OLX Blog</li>
                        <li>Contact US</li>
                        <li>OLX for Businesses</li>
                    </ul>
                </section>
                <section>
                    <span className="justheading">OLX</span>
                    <ul className="ulSubFooter">
                        <li>Help</li>
                        <li>Sitemap </li>
                        <li>Legal & Privacy information</li>
                    </ul>
                </section>
                <section>
                    <div>
                        <span className="justheading">FOLLOW US</span><br/>
                        <div class="sociallinks">
                            <br/><br/>
                            <a><i class="fa fa-facebook"></i></a>
                            <a><i class="fa fa-twitter"></i></a>
                            <a><i class="fa fa-play"></i></a>
                            <a><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="storeBtnDiv"><br/>
                        <button className="storeBtn"><img src={AppStoreLogo}/></button>
                        <button className="storeBtn"><img src={GooglePlayStoreLogo}/></button>
                    </div>
                </section>
            </div>
        )
    }
}
export default SubFooter;