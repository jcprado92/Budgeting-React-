import React from "react";
import { Link } from "react-router-dom"
function Transaction({ transaction, index }) {
  return (
    <>
      <p>{transaction.date}</p>
      <Link to={`/transactions/${index}`}><p>{transaction.item_name}</p></Link>
      <p>{transaction.amount}</p>
    </>
  );
}

export default Transaction;
