import React from 'react'
import '../App.css'
class SubHeader extends React.Component{
    render(){
        var nav = [
            {label: "Mobile Phones"},
            {label: "Cars"},
            {label: "Motorcycles"},
            {label: "Houses"},
            {label: "TV-Video-Audio"},
            {label: "Tablets"},
            {label: "land And Plots"}
        ];
        return(
            <div className="main_SubHeader">
                <div className="hNav">
                    <button className="downBtnOfhNav">
                        <a className="allBtn" className="view"><strong>ALL CATAGORIES</strong></a>
                        <i class="fa fa-chevron-down"></i>
                    </button>
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