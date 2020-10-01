import React from 'react';
import '../App.css'
import olxLogo from '../images/finalOlxLogo.png'

class Header extends React.Component{
    render(){
        return(
            <div className="header_settings">
                <img src={olxLogo} width="48" height="48"/>
            </div>
        )
    }
}

export default Header;