import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
class Footer extends React.Component{
render(){
return(
<>
    <div className="mainFooter">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <section className="section1">
                        <span>Other Countries</span>
                        <Link to="/">India</Link>
                        <span>-</span>
                        <Link t0="/">South Africa</Link>
                        <span>-</span>
                        <Link to="/">Indonesia</Link>
                    </section>
                </div>
                <div className="col-md-6 text-right">
                    <section className="section2">
                        <span>Free Classified in pakistan . &copy; OLX Clone - Safeer Shaikh - All Rights Reserved</span>
                    </section>
                </div>
            </div>
        </div>
    </div>  
</>
)
}
}
export default Footer;