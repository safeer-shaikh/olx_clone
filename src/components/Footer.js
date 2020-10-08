import React from 'react'
import '../App.css'
class Footer extends React.Component{
    render(){
        return(
            <div className="mainFooter">
                <section className="section1">
                    <span>Other Countries</span>
                    <a>India</a>
                    <span>-</span>
                    <a>South Africa</a>
                    <span>-</span>
                    <a>Indonesia</a>
                </section>
                <section className="section2">
                    <span>Free Classified in pakistan . &copy; 2006-2020 OLX</span>
                </section>
            </div>
        )
    }
}
export default Footer;