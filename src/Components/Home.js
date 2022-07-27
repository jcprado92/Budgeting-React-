import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>Welcome to Seashells</h1>
        <Link to="/transactions"><button>See Recent Transactions</button></Link>
    </div>
  )
}

export default Home