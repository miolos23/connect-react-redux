import React from "react";
import { DELETE_ACCOUNT_ACTION } from "../redux/accounts/accountActionCreators";
import { useSelector, useDispatch } from "react-redux";

function NewAccounts(props) {
    const accounts = useSelector(state => state.accounts);
    const dispatch = useDispatch();

    const allAccounts = accounts.map(account => {
        return (
            <h2 key={account.id}>{account.name} <button onClick={() => {
                dispatch(DELETE_ACCOUNT_ACTION(account.id))
            }}>Delete</button></h2>
        )
    })

    return (
        <div>
            <h1>Accounts</h1>
            {allAccounts}
        </div>
    )
}

export default NewAccounts;
