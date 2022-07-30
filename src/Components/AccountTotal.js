import React from 'react'
import {useState} from "react"


function AccountTotal({ transactions}) {
    const [accountTotal, setAccountTotal] = useState(100)

    let total = 0

    let amounts = transactions.map(transaction => Number(transaction.amount))
    
    amounts.forEach(amount => {
        total += amount
        return total
    });
    // for(let i = 0; i < transactions.length; i++){
    //  total += Number(transactions[i].amount)
    //  console.log(total)
    //  return total
    // }

    
    
  return (
    <div>
        {/* <h2>Account Total : {setAccountTotal(accountTotal + total)}</h2> */}
        <h2>Account Total : {accountTotal + total}</h2>
    </div>
  )
}

export default AccountTotal