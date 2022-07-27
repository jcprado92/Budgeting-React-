import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EditTransaction() {
  let { index } = useParams();
  const navigate = useNavigate();


  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleNumberChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data));
  }, []);


  const updateTransaction = () => {
    axios.put(`${API}/transactions/${index}`, transaction)
      .then((res) => {
        setTransaction(res.data);
        navigate(`/transactions/${index}`);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="transactionName">Transaction Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleNumberChange}
          placeholder="Amount"
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
        <label htmlFor="from">From Who?:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From Who?"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />
        <br />
        <input type="submit" />
      </form>
      {/* <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link> */}
    </div>
  );
}

export default EditTransaction;
