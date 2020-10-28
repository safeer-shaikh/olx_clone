import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SubBannerImage from '../images/SubBannerImage.png'
import AppStoreLogo from '../images/AppStoreLogo.png'
import GooglePlayStoreLogo from '../images/GooglePlayStoreLogo.png'

class SubBanner extends React.Component{
    render(){
        return(
            <div className="mainSubBanner">
                <img className="mobile" src={SubBannerImage}/>
                <div className="FirstDivSubBanner">
                    <br/><span className="FirstSpanSubBanner">TRY THE OLX APP</span><br/><br/>
                    <span className="SecondSpanSubBanner">Buy, sell and find just about anything using the app on your mobile.</span>
                </div>
                <div className="SecondDivSubBanner">
                    <br/><br/><span>GET YOUR APP TODAY</span><br/><br/>
                    <Link to='/' target='_blank'><button><img className="store" src={AppStoreLogo}/></button></Link>
                    <Link to='/' target='_blank'><button><img className="store" src={GooglePlayStoreLogo}/></button></Link>
                </div>
            </div>
        )
    }
}
export default SubBanner;