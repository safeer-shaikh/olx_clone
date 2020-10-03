import React from 'react'
import '../App.css'
class SubHeader extends React.Component{
    render(){
        var nav = [
            {ID: 1, label: "Mobile Phones"},
            {ID: 2, label: "Cars"},
            {ID: 3, label: "Motorcycles"},
            {ID: 4, label: "Houses"},
            {ID: 5, label: "TV-Video-Audio"},
            {ID: 6, label: "Tablets"},
            {ID: 7, label: "land And Plots"}
        ];
        return(
            <div className="main_SubHeader">
                <div className="hNav">
                    <a className="view"><strong>All Catagories</strong></a>
                    <button><i class="fa fa-chevron-down"></i></button>
                    {
                        nav.map(item => {
                            return(
                                <a>{item.label}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default SubHeader;