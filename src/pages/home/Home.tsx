import React from 'react'
import "./Home.scss"
import Header from '../../components/header/Header'
import Body from '../../components/body/Body'
import Search from '../../components/search/Search'
export const Home = () => {
  return (
    <div className='homeContainer'>
      <div style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/655676/pexels-photo-655676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` 
    }}>
      <Header />
      <Body/>
      <Search/>
    </div>
    </div>
  )
}

export default Home