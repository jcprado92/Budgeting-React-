import React from 'react'
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div>
        <Link to="/">Seashells</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/transaction/new"><button>New Transaction</button></Link>
    </div>
  )
}

export default Nav