import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//global context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

        // actions
    //delete transaction
    function deleteTransaction(id) {
        dispatch({
            type: 'delete_transaction',
            payload: id
        });
    }

    //add transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'add_transaction',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}