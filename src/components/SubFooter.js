import React from 'react'
import AppStoreLogo from '../images/AppStoreLogo.png'
import GooglePlayStoreLogo from '../images/GooglePlayStoreLogo.png'
class SubFooter extends React.Component{
render(){
return(
<div className="mainSubFooter">
    <div className="container">
        <ul className="footMenu">
            <li>
                <section>
                    <span className="justheading">POPULAR CATEGORIES</span>
                    <ul className="ulSubFooter">
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">Flat for rent</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Mobile Phones</a></li>
                    </ul>
                </section>
            </li>
            <li>
                <section>
                    <span className="justheading">TRENDING SEARCH</span>
                    <ul className="ulSubFooter">
                        <li><a href="#">Bikes</a></li>
                        <li><a href="#">Watches</a></li>
                        <li><a href="#">Books</a></li>
                        <li><a href="#">Dogs</a></li>
                    </ul>
                </section>
                
            </li>
            <li>
                <section>
                    <span className="justheading">ABOUT US</span>
                    <ul className="ulSubFooter">
                        <li><a href="#">About OLX Group</a></li>
                        <li><a href="#">OLX Blog</a></li>
                        <li><a href="#">Contact US</a></li>
                        <li><a href="#">OLX for Businesses</a></li>
                    </ul>
                </section>
            </li>
            <li>
                <section>
                    <span className="justheading">OLX</span>
                    <ul className="ulSubFooter">
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Legal & Privacy information</a></li>
                    </ul>
                </section>
            </li>
            <li>
                <section>
                    <div>
                        <span className="justheading">FOLLOW US</span><br />
                        <div className="sociallinks">
                            <br /><br />
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-play"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="storeBtnDiv">
                        <button className="storeBtn"><img src={AppStoreLogo} /></button>
                        <button className="storeBtn"><img src={GooglePlayStoreLogo} /></button>
                    </div>
                </section>
            </li>
        </ul>
    </div>
</div>
)
}
}
export default SubFooter;