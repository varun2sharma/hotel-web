import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Strip.scss"
import "@fortawesome/style";
export const Strip = () => {
  return (
    <div className='stripContainer py-1'>
      <div className="stripList d-flex justify-content-between px-3 py-3 " >
        <div className='stays stripItem d-flex px-1 pt-1 '>
        
          <i className="fa fa-solid fa-chart-simple" />
          <a>icons</a>
          <a>Stays</a>
        </div>
        <div className='stripItem flight d-flex'>
          <a>icons</a>
          <a>Flights</a>
        </div>
        <div className='stripItem hotel d-flex'>
          <a>icons</a>
          <a>Flights + Hotel</a>
        </div>
        <div className='stripItem carRental d-flex'>
          <a>icons</a>
          <a>Car rentals</a>
        </div>
        <div className='stripItem Attractons d-flex'>
          <a>icons</a>
          <a>Attractions</a>
        </div>
        <div className='stripItem taxi d-flex'>
          <a>icons</a>
          <a>Airport taxis</a>
        </div>
      </div>
    </div>
  )
}

export default Strip;