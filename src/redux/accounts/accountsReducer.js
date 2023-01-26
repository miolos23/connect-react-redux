import initState from "./initState";
import { DELETE_ACCOUNT } from "./accountsActionTypes";

const accountsReducer = (state = initState, action) => {
    switch (action.type) {
        case DELETE_ACCOUNT:
            const filteredAccounts = state.accounts.filter(account => {
                return account.id !== action.payload.id;
            })
            return {
                ...state,
                accounts: filteredAccounts
            }
        default:
            return state
    }
}

export default accountsReducer;