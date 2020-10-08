import { render } from '@testing-library/react'
import React from 'react'

class Body extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <span></span>
                        <button><span></span></button>    
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}