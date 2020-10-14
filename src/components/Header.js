import React from 'react';
import '../App.css'
import olxLogo from '../images/finalOlxLogo.png'
class Header extends React.Component{
render(){
return(
<div className="header_settings">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md-1">
                <div className="image_settings">
                    <a href="./">
                        <img src={olxLogo} alt="olx Logo" />
                    </a>
                </div>
            </div>
            <div className="col-md-3">
                <div className="loc_search">
                    {/* <i className="fa fa-search"></i>
                    <input className="loc_searchBar" type="text" placeholder="Pakistan" />
                    <button className="down_icon"><i className="fa fa-chevron-down"></i></button> */}
                    <div className="input-group">
                        <div className="input-group-append">
                            <button className="btn " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-search pakarisko"></i>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Pakistan" />
                                <i className="fa fa-chevron-down naiPakarisko"></i>
                            </button>
                            <div className="dropdown-menu mainDropDown">
                                <h6>Use Current Location <span>Location blocked. Check browser/phone settings.</span></h6>
                                <h5>Popular locations</h5>
                                <ul className="locationList">
                                    <li><a href="#"><i className="fa fa-map-marker"></i> punjab</a></li>
                                    <li><a href="#"><i className="fa fa-map-marker"></i> Islamabad Capital Territory</a></li>
                                    <li><a href="#"><i className="fa fa-map-marker"></i> Sindh</a></li>
                                    <li><a href="#"><i className="fa fa-map-marker"></i> Khyber Pakhtunkhwa</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="things_search">
                    <input className="form-control" type="text" placeholder="  Find Cars, Mobile Phones and more..." />
                    <div className="search_icon">
                        <button className="search_iconBtn">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                 <div className="signinBtn">
                    <button className="loginBtn">Login</button>
                    <button className="plus_icon">
                        <div><i className="fa fa-plus"></i></div>
                        <h6>SELL</h6>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
}
export default Header;