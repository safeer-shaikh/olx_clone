import React from 'react'
import '../App.css'
class SubHeader extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         Mobiles: ["Mobile", "Tablets", "Accessories Mobile Phones"],
    //         Vehicles: ["Vehicles", "Cars", "Cars On Installments", "Cars Accessories", "Spare Parts", "Buses, Vans & Trucks", "Rickshaw Chingchi", "Other Vehicles", "Boats", "Tractor & Trailers"],
    //         PropertySale: ["Land & Plots", "Houses", "Apartments & Flats", "Shop-Offices-Commercial Space", "Portions & Floors"],
    //         propertyRent: ["Houses", "Apartments & Flats", "Portions & Floors", "Shop-Offices-Commercial Space", "Roommates & Paying Guests", "Vacation Rentals - Guest Houses", "Land & Plots"]
    //     }
    //}
    
    render(){
        // const content = [
        //     {ID:1, label: "Mobile",},
        //     {ID:2, label: "Tablets",}
        // ]
        return(
            <div className="main_SubHeader">
                {/* <div className="hNav">
                    <button className="downBtnOfhNav btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
                        <span><strong>ALL CATAGORIES</strong></span>
                        <i class="fa fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div> */}
                <div className="hNav">
                    <button className="downBtnOfNav" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                        <span><strong>ALL CATAGORIES</strong></span>
                        <i className="fa fa-chevron-down"></i>
                    </button>
                    <div className="dropdown-menu moreInAllCatagories" arial-labelledby="dropdownMenuButtom">
                        <div className="divOfdropdownMenu">
                            <div className="Mobiles">
                                <div><a href="#">Mobiles</a></div>
                                <div><a href="#">Tablets</a></div>
                                <div><a href="#">Accessories</a></div>
                                <div><a href="#">Mobile Phones</a></div>
                            </div>
                            <div className="Vehicles">
                                <div><a href="#">Vehicles</a></div>
                                <div><a href="#">Cars</a></div>
                                <div><a href="#">Cars on Installments</a></div>
                                <div><a href="#">Cars Accessories</a></div>
                                <div><a href="#">Spare Parts</a></div>
                                <div><a href="#">Buses, Vans & Trucks</a></div>
                                <div><a href="#">Rickshaw & Chingchi</a></div>
                                <div><a href="#">Other Vehicles</a></div>
                                <div><a href="#">Boats</a></div>
                                <div><a href="#">Tractor & Trailers</a></div>
                            </div>
                            <div className="PropertySale">
                                <div><a href="#">Property for Sale</a></div>
                                <div><a href="#">Land & Plots</a></div>
                                <div><a href="#">Houses</a></div>
                                <div><a href="#">Apartments & Flats</a></div>
                                <div><a href="#">Shops - Offices - Commercial Space</a></div>
                                <div><a href="#">Portions & Floors</a></div>
                            </div>
                            <div className="PropertyRent">
                                <div><a href="#">Property for Rent</a></div>
                                <div><a href="#">Houses</a></div>
                                <div><a href="#">Apartments & Flats</a></div>
                                <div><a href="#">Portions & Floors</a></div>
                                <div><a href="#">Shops - Offices - Commercial Space</a></div>
                                <div><a href="#">Roommates & Paying Guests</a></div>
                                <div><a href="#">Vacation Rentals - Guest Houses</a></div>
                                <div><a href="#">Land & Plots</a></div>
                            </div>
                            <div className="Electronics">
                                <div><a href="#">Electronics & Home Appliances</a></div>
                                <div><a href="#">Computers & Accessories</a></div>
                                <div><a href="#">TV - Video - Audio</a></div>
                                <div><a href="#">Cameras & Accessories</a></div>
                                <div><a href="#">Games & Entertainment</a></div>
                                <div><a href="#">Other Home Appliances</a></div>
                                <div><a href="#">Generators, UPS & Power Solutions</a></div>
                                <div><a href="#">Fridges & Freezers</a></div>
                                <div><a href="#">Washing Machines & Dryers</a></div>
                            </div>
                            <div className="Bikes">
                                <div><a href="#">Bikes</a></div>
                                <div><a href="#">Motorcycles</a></div>
                                <div><a href="#">Spare Parts</a></div>
                                <div><a href="#">Bicycles</a></div>
                                <div><a href="#">ATV & Quads</a></div>
                                <div><a href="#">Scooters</a></div>
                            </div>
                            <div className="Business">
                                <div><a href="#">Business, Industrial & Agriculture</a></div>
                                <div><a href="#">Business for Sale</a></div>
                                <div><a href="#">Food & Restaurants</a></div>
                                <div><a href="#">Trade & Industrial</a></div>
                                <div><a href="#">Construction & Heavy Machinery</a></div>
                                <div><a href="#">Agriculture</a></div>
                                <div><a href="#">Other Business & Industry</a></div>
                                <div><a href="#">Medical & Pharma</a></div>
                            </div>
                            <div className="Services">
                                <div><a href="#">Services</a></div>
                                <div><a href="#">Education & Classes</a></div>
                                <div><a href="#">Travel & Visa</a></div>
                                <div><a href="#">Car Rental</a></div>
                                <div><a href="#">Driver & Taxi</a></div>
                                <div><a href="#">Web Development</a></div>
                                <div><a href="#">Other Services</a></div>
                                <div><a href="#">Electronic & Computer Repair</a></div>
                                <div><a href="#">Event Services</a></div>
                                <div><a href="#">Health & Beauty</a></div>
                                <div><a href="#">Maids & Domestic Help</a></div>
                                <div><a href="#">Movers & Packers</a></div>
                                <div><a href="#">Home & Office Repair</a></div>
                                <div><a href="#">Catering & Restaurant </a></div>
                                <div><a href="#">Farm & Fresh Food</a></div>
                            </div>
                            <div className="Jobs">
                                <div><a href="#">Jobs</a></div>
                                <div><a href="#">Online </a></div>
                                <div><a href="#">Marketing</a></div>
                                <div><a href="#">Advertising and PR</a></div>
                                <div><a href="#">Education</a></div>
                                <div><a href="#">Customer Service</a></div>
                                <div><a href="#">Sales</a></div>
                                <div><a href="#">IT & Networking</a></div>
                                <div><a href="#">Hotle & Tourism</a></div>
                                <div><a href="#">Clerical & Administration</a></div>
                                <div><a href="#">Human Resources</a></div>
                                <div><a href="#">Accounting & Finance</a></div>
                                <div><a href="#">Manufacturing</a></div>
                                <div><a href="#">Medical</a></div>
                                <div><a href="#">Domestic Studd</a></div>
                                <div><a href="#">Part-Time</a></div>
                                <div><a href="#">Other Jobs</a></div>
                            </div>
                            <div className="Animals">
                                <div><a href="#">Animals</a></div>
                                <div><a href="#">Fish & Aquariums</a></div>
                                <div><a href="#">Birds</a></div>
                                <div><a href="#">Hens & Aseel</a></div>
                                <div><a href="#">Cats</a></div>
                                <div><a href="#">Dogs</a></div>
                                <div><a href="#">Livestock</a></div>
                                <div><a href="#">Horses</a></div>
                                <div><a href="#">Pet Food & Accessories</a></div>
                                <div><a href="#">Other Animals</a></div>
                            </div>
                            <div className="Furniture">
                                <div><a href="#">Furniture & Home Deco</a></div>
                                <div><a href="#">Sofa & Chairs</a></div>
                                <div><a href="#">Beds & Wardrobes</a></div>
                                <div><a href="#">Home Decoration</a></div>
                                <div><a href="#">Tables & Dining</a></div>
                                <div><a href="#">Garden & Outdoor</a></div>
                                <div><a href="#">Painting & Mirrors</a></div>
                                <div><a href="#">Rugs & Carpets</a></div>
                                <div><a href="#">Curtains & Blinds</a></div>
                                <div><a href="#">Office Furniture</a></div>
                                <div><a href="#">Other Household items</a></div>
                            </div>
                            <div className="Fashion">
                                <div><a href="#">Fashion & Beauty</a></div>
                                <div><a href="#">Accessories</a></div>
                                <div><a href="#">Cloths</a></div>
                                <div><a href="#">Footware</a></div>
                                <div><a href="#">Jawellery</a></div>
                                <div><a href="#">Make up</a></div>
                                <div><a href="#">Skin & Hairs</a></div>
                                <div><a href="#">Watches</a></div>
                                <div><a href="#">Weddings</a></div>
                                <div><a href="#">Lawn & Pret</a></div>
                                <div><a href="#">Couture</a></div>
                                <div><a href="#">Other Fashion</a></div>
                            </div>
                            <div className="Books">
                                <div><a href="#">Books, Sports & Hobbies</a></div>
                                <div><a href="#">Books & Magazines</a></div>
                                <div><a href="#">Musical Instruments</a></div>
                                <div><a href="#">Sports Equipments</a></div>
                                <div><a href="#">Gym & Fitness</a></div>
                                <div><a href="#">Other Hobbies</a></div>
                            </div>
                            <div className="Kids">
                                <div><a href="#">Kids</a></div>
                                <div><a href="#">Kids Furniture</a></div>
                                <div><a href="#">Toys</a></div>
                                <div><a href="#">Prams & Walkers</a></div>
                                <div><a href="#">Swings & Sliders</a></div>
                                <div><a href="#">Kids Bikes</a></div>
                                <div><a href="#">Kids Accessories</a></div>
                            </div>
                        </div>
                    </div>
                </div>
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
        )
    }
}
export default SubHeader;