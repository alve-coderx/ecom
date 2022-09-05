import React from 'react'
import {TopPromo,TopCorner,SecondCorner,SecondPromo,Footer, Navbar} from '../Components'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <TopPromo/>
        <TopCorner/>
        <SecondCorner/>
        <SecondPromo/>
    </div>
  )
}

export default Home