import React from "react";
import "./AccountTotal.css"
const span = document.querySelector('#span')

function AccountTotal({ transactions }) {
  let total = 0;
  // const span = document.querySelector('#span')

  // if(total < 0){
  //   span.content.style.color = "red"
  // }else if(total <= 1000){
  //   span.content.style.color = "beige"
  // }else{
  //   span.content.style.color = "green"
  // }

  let amounts = transactions.map((transaction) => Number(transaction.amount));

  amounts.forEach((amount) => {
    total += amount;
  });

  return (
    <div className="total">
      <h2>Account Total : <span id="total">{total}</span></h2>
    </div>
  );
}

export default AccountTotal;
