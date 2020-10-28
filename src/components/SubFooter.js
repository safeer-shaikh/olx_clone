import React from 'react'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom'
import AppStoreLogo from '../images/AppStoreLogo.png'
import GooglePlayStoreLogo from '../images/GooglePlayStoreLogo.png'
class SubFooter extends React.Component{
    constructor(){
        super()
        this.state = {
            popular: ['Cars','Flat for Rent','Jobs','Mobile Phones'],
            trending: ['Bikes','Watches','Books','Dogs'],
            about: ['About Olx Group','Olx Blog','Contact us','Olx as Bussiness'],
            olx: ['Help','Sitemap','Legal & Privacy Information'],
        }
    }
render(){
return(
<div className="mainSubFooter">
    <div className="container">
        <ul className="footMenu">
            <li>
                <section>
                    <span className="justheading">POPULAR CATEGORIES</span>
                    <ul className="ulSubFooter">
                        {
                            this.state.popular.map((v,i)=>(
                                <li><Link to='/items' key={i} >{v}</Link></li>
                            ))
                        }
                    </ul>
                </section>
            </li>
            <li>
                <section>
                    <span className="justheading">TRENDING SEARCH</span>
                    <ul className="ulSubFooter">
                        {
                            this.state.trending.map((v,i)=>(
                                <li><Link to='/items' key={i}>{v}</Link></li>
                            ))
                        }
                    </ul>
                </section>
                
            </li>
            <li>
                <section>
                    <span className="justheading">ABOUT US</span>
                    <ul className="ulSubFooter">
                        {
                            this.state.about.map((v,i)=>(
                                <li><Link to='/items' key={i} >{v}</Link></li>
                            ))
                        }
                    </ul>
                </section>
            </li>
            <li>
                <section>
                    <span className="justheading">OLX</span>
                    <ul className="ulSubFooter">
                        {
                            this.state.olx.map((v,i)=>(
                                <li><Link to='/items' key={i} >{v}</Link></li>
                            ))
                        }
                    </ul>
                </section>
            </li>
            <li>
                <section>
                    <div>
                        <span className="justheading">FOLLOW US</span><br />
                        <div className="sociallinks">
                            <br /><br />
                            <Link to="/" target='_blank'><i className="fa fa-facebook"></i></Link>
                            <Link to="/" target='_blank'><i className="fa fa-twitter"></i></Link>
                            <Link to="/" target='_blank'><i className="fa fa-play"></i></Link>
                            <Link to="/" target='_blank'><i className="fa fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="storeBtnDiv">
                        <Link to='/' target='_blank'><button className="storeBtn"><img src={AppStoreLogo} /></button></Link>
                        <Link to='/' target='_blank'><button className="storeBtn"><img src={GooglePlayStoreLogo} /></button></Link>
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