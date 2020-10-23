import React from 'react'
import '../App.css'
import SubBannerImage from '../images/SubBannerImage.png'
import AppStoreLogo from '../images/AppStoreLogo.png'
import GooglePlayStoreLogo from '../images/GooglePlayStoreLogo.png'

class SubBanner extends React.Component{
    render(){
        let gotoAppStore = () => {
            window.location.push('www.google.com')
        }
        return(
            <div className="mainSubBanner">
                <img className="mobile" src={SubBannerImage}/>
                <div className="FirstDivSubBanner">
                    <br/><span className="FirstSpanSubBanner">TRY THE OLX APP</span><br/><br/>
                    <span className="SecondSpanSubBanner">Buy, sell and find just about anything using the app on your mobile.</span>
                </div>
                <div className="SecondDivSubBanner">
                    <br/><br/><span>GET YOUR APP TODAY</span><br/><br/>
                    <button onClick={gotoAppStore}><img className="store" src={AppStoreLogo}/></button>
                    <button><img className="store" src={GooglePlayStoreLogo}/></button>
                </div>
            </div>
        )
    }
}
export default SubBanner;