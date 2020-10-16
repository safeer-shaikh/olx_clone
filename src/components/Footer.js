import React from 'react'
import '../App.css'
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
                        <a href="#">India</a>
                        <span>-</span>
                        <a href="#">South Africa</a>
                        <span>-</span>
                        <a href="#">Indonesia</a>
                    </section>
                </div>
                <div className="col-md-6 text-right">
                    <section className="section2">
                        <span>Free Classified in pakistan . &copy; 2006-2020 OLX</span>
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