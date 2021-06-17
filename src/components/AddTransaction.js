import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
export const AddTransaction = () => {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);

    const {addTransaction}=useContext(GlobalContext)
    function generateID() {
      return Math.floor(Math.random() * 100000000);
    }
    const transactionHandler=(e)=>{
      e.preventDefault();
      const transaction={id:generateID,text,amount:+amount}
      addTransaction(transaction)
    }
    return (

    <>
    <h3>Add new transaction</h3>
      <form onSubmit={transactionHandler} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." value={amount}  onChange={(e)=>setAmount(e.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
    )
}
