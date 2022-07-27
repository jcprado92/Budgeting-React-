import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Transaction from "./Transaction";

const API = process.env.REACT_APP_API_URL;
function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error(err));
  }, []);

  return(
  <div>
    <section>{transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} index={index}/>})}</section>
  </div>
  ) 
}

export default Transactions;
