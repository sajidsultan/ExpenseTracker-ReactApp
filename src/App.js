import React from 'react';
import './App.css';
import Expensecomp from './Expensecomp';
import {TransationProvider} from './transactioncontext';

function App() {
  return (
    <TransationProvider>
      <Expensecomp />
    </TransationProvider>
   
  );
}

export default App;
