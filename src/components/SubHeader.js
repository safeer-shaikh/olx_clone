import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class SubHeader extends React.Component{
    constructor(){
    super()
    this.state = {
        Mobiles: ["Tablets","Accessories","Mobile Phones"],
        Vehicles: ["Cars","Cars on Installments","Car Accessories","Spare parts","Buses, Vans & Trucks","Rickshaw & Chingchi","Other Vehicles","Boats","Tractor & Trailers"],
        PropertySale: ["Land & Plots","Houses","Apartments & Flats","Shops - Offices - Commercial Space"],
        PropertyRent: ["Houses","Apartments & Flats","Portions & Floors","Shops - Offices - Commercial Space","Roommates & Paying Guest","Vacation Rentals - Guest Houses","Land & Plots","Houses","Apartments & Flats","Portions & Floors","Shops - Offices - Commercial Space","Roommates & Paying Guest","Vacation Rentals - Guest Houses","Land & Plots"],
        Electronics: ["Computers & Accessories","TV - Video - Audio","Cameras & Accessories","Games & Entertainment","Other Home Appliances","Generators, UPS & Power Solutions","Kitchen Appliances","AC & Coolers","Fridges & Freezers","Washing Machines & Dryers"],
        Bikes: ["Motorcycles","Spare Parts","Bicycles","ATV & Quads","Scooters"],
        Business: ["Business for Sale","Food & Restaurants","Trade & Industrial","Construction & Heavy Machinery","Agriculture","Other Business & Industry","Medical & Pharma"],
        Services: ["Education & Classes","Travel & Visa","Car Rental","Driver & Taxi","Web Development","Other Services","Electronic & Computer Repair","Event Servicex","Health & Beauty","Maids & Domestic Help","Movers & Packers","Home & Office Repair","Catering & Restaurant ","Farm & Fresh Food"],
        Jobs: ["Online","Marketing","Advertising and PR","Education","Customer Service","Sales","IT and Networking","Hotel & Tourism","Clerical & Administration","Human Resources","Accounting & Finanace","Manufacturing","Medical","Domestic Studd","Part Time","Other Jobs"],
        Animals: ["Fish & Aquariums","Birds","Hens & Aseel",'Cats','Dogs','Livestock','Horses','pet Food & Accessories','Other Animals'],
        Furniture: ['Sofa & Chairs','Beds & Wardrobes','Home Decoration','Table & Dining','Garden & Outdoor','Painting & Mirrors','Rugs & Carpets','Curtains & Blinds','Office Furniture','Other HouseHold Items'],
        Fashion: ['Accessories','Cloths','Footware','Jawellary','Make up','Skin & hairs','Watches','Weddings','Lawn & Pret','Couture','Other Fashion'],
        Books: ['Books & Magazines','Musical Instruments','Sports Equipments','Gym & Fitness','Other Hobbies'],
        Kids: ['Kid Furniture','Toys','Prams & Walkers','Swings & Sliders','Kids Accessories'],
    }
    }
render(){
return(
<div className="main_SubHeader">
    <div className="container">
        <div className="row">
            <div className="col-md-2">
                <div className="hNav">
                    <button className="downBtnOfNav" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                        <span><strong>ALL CATAGORIES</strong></span>
                        <i className="fa fa-chevron-down alsoRotate"></i>
                    </button>
                    <div className="dropdown-menu moreInAllCatagories" arial-labelledby="dropdownMenuButtom">
                        <div className="divOfdropdownMenu row">
                            <div className="col-md-3">
                                <div className="Mobiles mainContent">
                                    <div className="subContent"><strong><Link to="/items">Mobiles</Link></strong></div>
                                    {
                                        this.state.Mobiles.map((v,i) => (
                                            <div className="subContent"  ><Link className="important-links" to="/items"  >{v}</Link></div>
                                        ))
                                    }
                                    </div>
                                <div className="Vehicles mainContent">
                                    <div className="subContent"><strong><Link to="/Items">Vehicles</Link></strong></div>
                                    {
                                        this.state.Vehicles.map((v,i) => (
                                            <div className="subContent" ><Link to="/items"  >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="PropertySale mainContent">
                                    <div className="subContent"><strong><Link to="/items">Property for Sale</Link></strong></div>
                                    {
                                        this.state.PropertySale.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="PropertyRent mainContent">
                                    <div className="subContent"><strong><Link to="/items">Property for Rent</Link></strong></div>
                                    {
                                        this.state.PropertyRent.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="Electronics mainContent">
                                    <div className="subContent"><strong><Link to="/items">Electronics & Home Appliances</Link></strong></div>
                                    {
                                        this.state.Electronics.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Bikes mainContent">
                                    <div className="subContent"><strong><Link to="/items">Bikes</Link></strong></div>
                                    {
                                        this.state.Bikes.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Business mainContent">
                                    <div className="subContent"><strong><Link href="/items">Business, Industrial & Agriculture</Link></strong></div>
                                    {
                                        this.state.Business.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Services mainContent">
                                    <div className="subContent"><strong><Link to="/items">Services</Link></strong></div>
                                    {
                                        this.state.Services.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="Jobs mainContent">
                                    <div className="subContent"><strong><Link to="/items">Jobs</Link></strong></div>
                                    {
                                        this.state.Jobs.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Animals mainContent">
                                    <div className="subContent"><strong><Link to="/items">Animals</Link></strong></div>
                                    {
                                        this.state.Animals.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Furniture mainContent">
                                    <div className="subContent"><strong><Link to="/items">Furniture & Home Deco</Link></strong></div>
                                    {
                                        this.state.Furniture.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="Fashion mainContent">
                                    <div className="subContent"><strong><Link to="/items">Fashion & Beauty</Link></strong></div>
                                    {
                                        this.state.Fashion.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Books mainContent">
                                    <div className="subContent"><strong><Link to="/items">Books, Sports & Hobbies</Link></strong></div>
                                    {
                                        this.state.Books.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Kids mainContent">
                                    <div className="subContent"><strong><Link to="/items">Kids</Link></strong></div>
                                    {
                                        this.state.Kids.map((v,i) => (
                                            <div className="subContent" ><Link to="/items" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-10">
                <div className="hNavOthers">
                    <Link><button>Mobile Phones</button></Link>
                    <Link><button>Cars</button></Link>
                    <Link><button>Motorcycles</button></Link>
                    <Link><button>Houses</button></Link>
                    <Link><button>TV-Video-Audio</button></Link>
                    <Link><button>Tablets</button></Link>
                    <Link><button>Land & Plots</button></Link>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
}
export default SubHeader;