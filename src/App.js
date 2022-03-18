import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
        <Footer/>
      </div>
    </GlobalProvider>
  );
}

export default App;
