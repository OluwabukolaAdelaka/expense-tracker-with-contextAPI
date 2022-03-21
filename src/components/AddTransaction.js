import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const {addTransaction} = useContext(GlobalContext);

  const addSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: parseInt(amount)
    }

    addTransaction(newTransaction);

    setText('');
    setAmount('');
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={addSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label>Amount <br />
            (add negative to amount for expense e.g -500)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;