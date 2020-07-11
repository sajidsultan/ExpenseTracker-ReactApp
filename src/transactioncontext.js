import React ,{ createContext, useReducer } from 'react';
import transationReducer from './transReduser'


const initialTransaction = [
    {amount: 100, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"},

]

export const TransactionContext = createContext(initialTransaction);

export const TransationProvider = ({children}) => {
    let [state, dispatch] = useReducer(transationReducer, initialTransaction);

    function addTransation (transObj){
        dispatch({
            type : "ADD_TRANSACTION",
            payload : {
                amount : transObj.amount,
                desc : transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransation
        }}>
            {children}
        </TransactionContext.Provider>
    )
}