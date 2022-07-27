import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction, setTransaction] = useState({});
  const navigate = useNavigate();
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
    //   .catch((err) => navigate("/wadayamean"));
  }, [index]);

  const deleteOption = () => {
    axios.delete(`${API}/transactions/${index}`)
    .then(res => navigate('/transactions'))
  };



  return (
    <div>
      <p>Transaction Name: {transaction.item_name}</p>
      <p>Amount: {transaction.amount}</p>
      <p>Transaction Date: {transaction.date}</p>
      <p>From: {transaction.from}</p>
      <p>Category: {transaction.category}</p>
      <button onClick={deleteOption}>Delete This Transaction</button>
      <Link to={`/transactions/${index}/edit`}><button>Edit This Transaction</button></Link>
    </div>
  );
}

export default TransactionDetails;
