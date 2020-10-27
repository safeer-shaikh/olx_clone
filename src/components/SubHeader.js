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
        Business: [],
        Services: [],
        Jobs: [],
        Animals: [],
        Furniture: [],
        Fashion: [],
        Books: [],
        Kids: [],
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
                                    {/* <div className="subContent"><a href="#">Tablets</a></div>
                                    <div className="subContent"><a href="#">Accessories</a></div>
                                    <div className="subContent"><a href="#">Mobile Phones</a></div> */}
                                    {
                                        this.state.Mobiles.map((v,i) => (
                                            <div className="SubContent" ><Link to="/" >{v}</Link></div>
                                        ))
                                    }
                                </div>
                                <div className="Vehicles mainContent">
                                    <div className="subContent"><strong><a href="#">Vehicles</a></strong></div>
                                    <div className="subContent"><a href="#">Cars</a></div>
                                    <div className="subContent"><a href="#">Cars on Installments</a></div>
                                    <div className="subContent"><a href="#">Cars Accessories</a></div>
                                    <div className="subContent"><a href="#">Spare Parts</a></div>
                                    <div className="subContent"><a href="#">Buses, Vans & Trucks</a></div>
                                    <div className="subContent"><a href="#">Rickshaw & Chingchi</a></div>
                                    <div className="subContent"><a href="#">Other Vehicles</a></div>
                                    <div className="subContent"><a href="#">Boats</a></div>
                                    <div className="subContent"><a href="#">Tractor & Trailers</a></div>
                                </div>
                                <div className="PropertySale mainContent">
                                    <div className="subContent"><strong><a href="#">Property for Sale</a></strong></div>
                                    <div className="subContent"><a href="#">Land & Plots</a></div>
                                    <div className="subContent"><a href="#">Houses</a></div>
                                    <div className="subContent"><a href="#">Apartments & Flats</a></div>
                                    <div className="subContent"><a href="#">Shops - Offices - Commercial Space</a></div>
                                    <div className="subContent"><a href="#">Portions & Floors</a></div>
                                </div>
                                <div className="PropertyRent mainContent">
                                    <div className="subContent"><strong><a href="#">Property for Rent</a></strong></div>
                                    <div className="subContent"><a href="#">Houses</a></div>
                                    <div className="subContent"><a href="#">Apartments & Flats</a></div>
                                    <div className="subContent"><a href="#">Portions & Floors</a></div>
                                    <div className="subContent"><a href="#">Shops - Offices - Commercial Space</a></div>
                                    <div className="subContent"><a href="#">Roommates & Paying Guests</a></div>
                                    <div className="subContent"><a href="#">Vacation Rentals - Guest Houses</a></div>
                                    <div className="subContent"><a href="#">Land & Plots</a></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="Electronics mainContent">
                                    <div className="subContent"><strong><a href="#">Electronics & Home Appliances</a></strong></div>
                                    <div className="subContent"><a href="#">Computers & Accessories</a></div>
                                    <div className="subContent"><a href="#">TV - Video - Audio</a></div>
                                    <div className="subContent"><a href="#">Cameras & Accessories</a></div>
                                    <div className="subContent"><a href="#">Games & Entertainment</a></div>
                                    <div className="subContent"><a href="#">Other Home Appliances</a></div>
                                    <div className="subContent"><a href="#">Generators, UPS & Power Solutions</a></div>
                                    <div className="subContent"><a href="#">Kitchen Appliances</a></div>
                                    <div className="subContent"><a href="#">AC & Coolers</a></div>
                                    <div className="subContent"><a href="#">Fridges & Freezers</a></div>
                                    <div className="subContent"><a href="#">Washing Machines & Dryers</a></div>
                                </div>
                                <div className="Bikes mainContent">
                                    <div className="subContent"><strong><a href="#">Bikes</a></strong></div>
                                    <div className="subContent"><a href="#">Motorcycles</a></div>
                                    <div className="subContent"><a href="#">Spare Parts</a></div>
                                    <div className="subContent"><a href="#">Bicycles</a></div>
                                    <div className="subContent"><a href="#">ATV & Quads</a></div>
                                    <div className="subContent"><a href="#">Scooters</a></div>
                                </div>
                                <div className="Business mainContent">
                                    <div className="subContent"><strong><a href="#">Business, Industrial & Agriculture</a></strong></div>
                                    <div className="subContent"><a href="#">Business for Sale</a></div>
                                    <div className="subContent"><a href="#">Food & Restaurants</a></div>
                                    <div className="subContent"><a href="#">Trade & Industrial</a></div>
                                    <div className="subContent"><a href="#">Construction & Heavy Machinery</a></div>
                                    <div className="subContent"><a href="#">Agriculture</a></div>
                                    <div className="subContent"><a href="#">Other Business & Industry</a></div>
                                    <div className="subContent"><a href="#">Medical & Pharma</a></div>
                                </div>
                                <div className="Services mainContent">
                                    <div className="subContent"><strong><a href="#">Services</a></strong></div>
                                    <div className="subContent"><a href="#">Education & Classes</a></div>
                                    <div className="subContent"><a href="#">Travel & Visa</a></div>
                                    <div className="subContent"><a href="#">Car Rental</a></div>
                                    <div className="subContent"><a href="#">Driver & Taxi</a></div>
                                    <div className="subContent"><a href="#">Web Development</a></div>
                                    <div className="subContent"><a href="#">Other Services</a></div>
                                    <div className="subContent"><a href="#">Electronic & Computer Repair</a></div>
                                    <div className="subContent"><a href="#">Event Services</a></div>
                                    <div className="subContent"><a href="#">Health & Beauty</a></div>
                                    <div className="subContent"><a href="#">Maids & Domestic Help</a></div>
                                    <div className="subContent"><a href="#">Movers & Packers</a></div>
                                    <div className="subContent"><a href="#">Home & Office Repair</a></div>
                                    <div className="subContent"><a href="#">Catering & Restaurant </a></div>
                                    <div className="subContent"><a href="#">Farm & Fresh Food</a></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="Jobs mainContent">
                                    <div className="subContent"><strong><a href="#">Jobs</a></strong></div>
                                    <div className="subContent"><a href="#">Online </a></div>
                                    <div className="subContent"><a href="#">Marketing</a></div>
                                    <div className="subContent"><a href="#">Advertising and PR</a></div>
                                    <div className="subContent"><a href="#">Education</a></div>
                                    <div className="subContent"><a href="#">Customer Service</a></div>
                                    <div className="subContent"><a href="#">Sales</a></div>
                                    <div className="subContent"><a href="#">IT & Networking</a></div>
                                    <div className="subContent"><a href="#">Hotle & Tourism</a></div>
                                    <div className="subContent"><a href="#">Clerical & Administration</a></div>
                                    <div className="subContent"><a href="#">Human Resources</a></div>
                                    <div className="subContent"><a href="#">Accounting & Finance</a></div>
                                    <div className="subContent"><a href="#">Manufacturing</a></div>
                                    <div className="subContent"><a href="#">Medical</a></div>
                                    <div className="subContent"><a href="#">Domestic Studd</a></div>
                                    <div className="subContent"><a href="#">Part-Time</a></div>
                                    <div className="subContent"><a href="#">Other Jobs</a></div>
                                </div>
                                <div className="Animals mainContent">
                                    <div className="subContent"><strong><a href="#">Animals</a></strong></div>
                                    <div className="subContent"><a href="#">Fish & Aquariums</a></div>
                                    <div className="subContent"><a href="#">Birds</a></div>
                                    <div className="subContent"><a href="#">Hens & Aseel</a></div>
                                    <div className="subContent"><a href="#">Cats</a></div>
                                    <div className="subContent"><a href="#">Dogs</a></div>
                                    <div className="subContent"><a href="#">Livestock</a></div>
                                    <div className="subContent"><a href="#">Horses</a></div>
                                    <div className="subContent"><a href="#">Pet Food & Accessories</a></div>
                                    <div className="subContent"><a href="#">Other Animals</a></div>
                                </div>
                                <div className="Furniture mainContent">
                                    <div className="subContent"><strong><a href="#">Furniture & Home Deco</a></strong></div>
                                    <div className="subContent"><a href="#">Sofa & Chairs</a></div>
                                    <div className="subContent"><a href="#">Beds & Wardrobes</a></div>
                                    <div className="subContent"><a href="#">Home Decoration</a></div>
                                    <div className="subContent"><a href="#">Tables & Dining</a></div>
                                    <div className="subContent"><a href="#">Garden & Outdoor</a></div>
                                    <div className="subContent"><a href="#">Painting & Mirrors</a></div>
                                    <div className="subContent"><a href="#">Rugs & Carpets</a></div>
                                    <div className="subContent"><a href="#">Curtains & Blinds</a></div>
                                    <div className="subContent"><a href="#">Office Furniture</a></div>
                                    <div className="subContent"><a href="#">Other Household items</a></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="Fashion mainContent">
                                    <div className="subContent"><strong><a href="#">Fashion & Beauty</a></strong></div>
                                    <div className="subContent"><a href="#">Accessories</a></div>
                                    <div className="subContent"><a href="#">Cloths</a></div>
                                    <div className="subContent"><a href="#">Footware</a></div>
                                    <div className="subContent"><a href="#">Jawellery</a></div>
                                    <div className="subContent"><a href="#">Make up</a></div>
                                    <div className="subContent"><a href="#">Skin & Hairs</a></div>
                                    <div className="subContent"><a href="#">Watches</a></div>
                                    <div className="subContent"><a href="#">Weddings</a></div>
                                    <div className="subContent"><a href="#">Lawn & Pret</a></div>
                                    <div className="subContent"><a href="#">Couture</a></div>
                                    <div className="subContent"><a href="#">Other Fashion</a></div>
                                </div>
                                <div className="Books mainContent">
                                    <div className="subContent"><strong><a href="#">Books, Sports & Hobbies</a></strong></div>
                                    <div className="subContent"><a href="#">Books & Magazines</a></div>
                                    <div className="subContent"><a href="#">Musical Instruments</a></div>
                                    <div className="subContent"><a href="#">Sports Equipments</a></div>
                                    <div className="subContent"><a href="#">Gym & Fitness</a></div>
                                    <div className="subContent"><a href="#">Other Hobbies</a></div>
                                </div>
                                <div className="Kids mainContent">
                                    <div className="subContent"><strong><a href="#">Kids</a></strong></div>
                                    <div className="subContent"><a href="#">Kids Furniture</a></div>
                                    <div className="subContent"><a href="#">Toys</a></div>
                                    <div className="subContent"><a href="#">Prams & Walkers</a></div>
                                    <div className="subContent"><a href="#">Swings & Sliders</a></div>
                                    <div className="subContent"><a href="#">Kids Bikes</a></div>
                                    <div className="subContent"><a href="#">Kids Accessories</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-10">
                <div className="hNavOthers">
                    <button>Mobile Phones</button>
                    <button>Cars</button>
                    <button>Motorcycles</button>
                    <button>Houses</button>
                    <button>TV-Video-Audio</button>
                    <button>Tablets</button>
                    <button>Land & Plots</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
}
export default SubHeader;