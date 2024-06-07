import React from 'react'
import { Nav,Hero,Sect,Footer } from '../components'

const Home = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
        <Nav/>
        <Hero/>
        <Sect/>
        <Footer/>
    </div>
  )
}

export default Home