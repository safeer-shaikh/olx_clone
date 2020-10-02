import React from 'react';
import '../App.css'
import olxLogo from '../images/finalOlxLogo.png'

class Header extends React.Component{
    render(){
        return(
            <div className="header_settings">
                <div className="image_settings">
                    <img src={olxLogo} alt="olx Logo"/>
                </div>
                <div className="loc_search">
                    <i className="fa fa-search"></i>
                    <input className="loc_searchBar" type="text" placeholder="Pakistan"/>
                    <button className="down_icon"><i class="fa fa-chevron-down"></i></button>
                </div>
                <div className="things_search">
                    <input type="text" placeholder="  Find Cars, Mobile Phones and more..." />
                    <div className="search_icon"><i class="fa fa-search"></i></div>
                </div>
                <div className="signinBtn">
                    <a>Sign In</a>
                    <button className="plus_icon">
                        <div><i class="fa fa-plus"></i></div>
                        <h2>Sell</h2>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header;