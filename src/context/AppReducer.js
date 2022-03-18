// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'delete_transaction':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'add_transaction':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default: 
        return state;
    }
}