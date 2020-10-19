import React from 'react';
// import Link from 'react-router-dom'
import '../App.css'
import olxLogo from '../images/finalOlxLogo.png'
import loginView1  from '../images/loginView1.png'
import loginView2 from '../images/loginView2.png'
import loginView3 from '../images/loginView3.png'

class Header extends React.Component{
render(){
    // gotoitems = () => {
    //     this.props.history.push('/items')
    // }
return(
<div className="header_settings">
    <div className="container-tm">
        <div className="row align-items-center">
            <div className="col-md-1">
                <div className="image_settings">
                    <a href="/">
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
                                <button className="currontlocationBtn" data-modal-target="#locationmodal">
                                <h6>Use Current Location <span>Location blocked. Check browser/phone settings.</span></h6>
                                </button>
                                <h5>Popular locations</h5>
                                <ul className="locationList">
                                    <li><a href="#" data-modal-target="#locationmodal"><i className="fa fa-map-marker"></i> punjab</a></li>
                                    <li><a href="#" data-modal-target="#locationmodal"><i className="fa fa-map-marker"></i> Islamabad Capital Territory</a></li>
                                    <li><a href="#" data-modal-target="#locationmodal"><i className="fa fa-map-marker"></i> Sindh</a></li>
                                    <li><a href="#" data-modal-target="#locationmodal"><i className="fa fa-map-marker"></i> Khyber Pakhtunkhwa</a></li>
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
                        <a href="/items">
                            <button className="search_iconBtn" >
                                <i className="fa fa-search"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                 <div className="signinBtn">
                    <button className="loginBtn" data-modal-target="#modal">Login</button>
                    <button className="plus_icon" data-modal-target="#modal">
                        <div><i className="fa fa-plus"></i></div>
                        <h6>SELL</h6>
                    </button>
                </div>
            </div>
            <div className="modal" id="modal">
                <button data-close-button className="close-button"><i className="fa fa-times"></i></button>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="false">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active loginItems">
                            <img className="d-block" src={loginView1} alt="First slide"/>
                            <div className="carousel-caption">
                                <p style={{color: "black"}}>Help make OLX safer place to buy and sell</p>
                            </div>
                        </div>
                        <div className="carousel-item loginItems">
                            <img className="d-block" src={loginView2} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <p style={{color: "black"}}>Contact and clsoe deals faster</p>
                            </div>
                        </div>
                        <div className="carousel-item loginItems">
                            <img className="d-block" src={loginView3} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <p style={{color: "black"}}>Save all your favourite items in one place</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev controlers" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next controlers" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="modal-body">
                        <button>Continue with phone</button>
                        <button><i className="fa fa-facebook loginfacebookicon"></i>Continue with facebook</button>
                        <button><i className="fa fa-google loginfacebookicon" ></i>Continue with google</button>
                        <button>Continue with email</button>
                </div>
                <span className='loginSpan'>We won't share your personal details with anyone</span>
            </div>
            <div id="overlay"></div>
        
            <div className="modal" id="locationmodal" style={{height: 200}}>
                <button data-close-button className="close-button" style={{fontSize: 26, marginLeft: "90%"}}><i className="fa fa-times"></i></button>
                <h3 style={{fontSize:20, fontWeight: "bold",marginTop: 15, width: 300,marginLeft: 20}}>Geolocation is blocked</h3>
                <p style={{fontSize: 15, marginLeft: 20}}>Looks like your geolocation permissions are blocked. Please, provide geolocation access in your browser settings and get the nearest ads.</p>
            </div>
            <div id="overlay"></div>

        </div>
    </div>
</div>
);
}
}
export default Header;