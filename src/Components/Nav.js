import React from 'react'
import { Link } from "react-router-dom"
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
        <Link to="/" className='link'>Seashells</Link>
        <Link to="/transactions" className='link'>Transactions</Link>
        <Link to="/transactions/new" className='link'><button>New Transaction</button></Link>
    </div>
  )
}

export default Nav