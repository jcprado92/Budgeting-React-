import axios from 'axios'
import React from 'react'
import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import "./NewTransaction.css"

const API = process.env.REACT_APP_API_URL

function NewTransaction() {

  const [newTransaction, setNewTransaction ] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: ""
  })

  
  const navigate = useNavigate()

  const addTransaction = () => {
    axios.post(`${API}/transactions`, newTransaction)
    .then(res => navigate("/transactions"))
    .catch(err => console.error(err))
  }

  const handleTextChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction()
  }
  
  return (
    <div className='new'>
      <h3>Create A New Transaction Below</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
        <label htmlFor="date">Date </label>
        <br/>
        <input
        id="date"
        value={ newTransaction.date}
        type="date"
        onChange={handleTextChange}
        planceholder="Date"
        required/>
         <br />
        <label htmlFor="newTransactionName">Trasaction Name</label>
        <br/>
        <input
        id="item_name"
        value={newTransaction.item_name}
        onChange={handleTextChange}
        type="text"
        planceholder="Name of New Transaction"
        required/>
        <br />
        <label htmlFor="transactionAmount">Amount </label>
        <br/>
        <input
        id="amount"
        value={newTransaction.amount}
        onChange={handleNumberChange}
        type="number"
        planceholder="Amount"
        required/>
         <br />
      
        
        <label htmlFor="from">From </label>
        <br/>
        <input
        id="from"
        value={newTransaction.from}
        onChange={handleTextChange}
        type="text"
        planceholder="From"
        required/>
         <br />
        <label htmlFor="category">Category </label>
        <br/>
        <input
        id="category"
        value={newTransaction.category}
        onChange={handleTextChange}
        type="text"
        planceholder="Category"
        required/>
        <br />
        <input type="submit" value="Submit New Transaction" />
      <Link to={`/transactions`}> 
        <button>Nevermind!</button>
       </Link>
        </fieldset>
      </form>
    </div>
  )
}

export default NewTransaction