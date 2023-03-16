import React from 'react'
import "./Body.scss"
export const Body = () => {
    return (
        <div className='bodyWrapper py-4 mt-4'>
            <div className='py-3 bodyText'>
                <h1>Ski the Swiss Alps this winter</h1>
                <h4 className='pt-2'>Discover Switzerland's best ski resorts and plan the perfect holiday</h4>
            </div>
            <div>
                <button className='btn btn-primary exploreBtn  mt-3 py-2  px-2'>Explore the slopes</button>
            </div>
        </div>
    )
}

export default Body;