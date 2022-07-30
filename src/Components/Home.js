import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
        <h1>Welcome to Seashells</h1>
        <Link to="/transactions"><button>See Recent Transactions</button></Link>
    </div>
  )
}

export default Home