import React from "react";

function AccountTotal({ transactions }) {
  let total = 0;

  let amounts = transactions.map((transaction) => Number(transaction.amount));

  amounts.forEach((amount) => {
    total += amount;
  });

  return (
    <div>
      <h2>Account Total : {total}</h2>
    </div>
  );
}

export default AccountTotal;
