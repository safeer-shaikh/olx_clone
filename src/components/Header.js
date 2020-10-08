import React from 'react';
import '../App.css'
import olxLogo from '../images/finalOlxLogo.png'

class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="header_settings">
                    <div className="image_settings">
                        <img src={olxLogo} alt="olx Logo"/>
                    </div>
                    <div className="loc_search">
                        {/* <i className="fa fa-search"></i>
                        <input className="loc_searchBar" type="text" placeholder="Pakistan"/>
                        <button className="down_icon"><i class="fa fa-chevron-down"></i></button> */}
                        <div className="input-group">
                            <div className="input-group-append">
                                <button className="btn " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-search pakarisko"></i>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Pakistan" />
                                    <i className="fa fa-chevron-down"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <div className="currentlocationdiv">
                                        <a className="dropdown-item thisisone" href="#"><div></div><div><strong>Use current location</strong></div><div className="locationfont">Location Blocked. Check<br/> browser/phone settings</div></a><hr/>
                                    </div>
                                    <div className="popularlocation">POPULAR LOCATIONS</div>
                                    <div className="dropdownitema">
                                        <a className="dropdown-item" href="#"><div></div><span className="cities">Punjab</span></a>
                                        <a className="dropdown-item" href="#"><div></div><span className="cities">Islamabad Capital Territory</span></a>
                                        <a className="dropdown-item" href="#"><div></div><span className="cities">Sindh</span></a>
                                        <a className="dropdown-item" href="#"><div></div><span className="cities">Khyber Pakkhtunkhwa</span></a>
                                    </div>
                                    {/* <div role="separator" className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Separated link</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="things_search">
                        <input type="text" placeholder="  Find Cars, Mobile Phones and more..." />
                        <div className="search_icon"><i className="fa fa-search"></i></div>
                    </div>
                    <div className="signinBtn">
                        <button className="loginBtn">Login</button>
                        <button className="plus_icon">
                            <div><i className="fa fa-plus"></i></div>
                            <h6>SELL</h6>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;