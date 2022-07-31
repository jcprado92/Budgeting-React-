import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditTransaction.css"

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
  }, [index]);


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
    <div className="edit">
      <h3>Edit This Transaction Below</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
        <label htmlFor="date">Date</label>
        <br/>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Date"
          required
        />
         <br />
        <label htmlFor="transactionName">Transaction Name</label>
        <br/>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Transaction"
          required
        />
        <br />
        <label htmlFor="amount">Amount</label>
        <br/>
        <input
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleNumberChange}
          placeholder="Amount"
          required
        />
        <br />
        <label htmlFor="from">From Who</label>
        <br/>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From Who?"
          required
        />
        <br />
        <label htmlFor="category">Category</label>
        <br/>
        <input
          id="category"
          value={transaction.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category"
          required
        />
        <br />
        <input type="submit" value="Submit Edit"/>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default EditTransaction;
