import React from "react";
import { connect } from "react-redux";
import { DELETE_ACCOUNT_ACTION } from "../redux/accounts/accountActionCreators";

function Accounts(props) {
    console.log(props);

    const allAccounts = props.accounts.map(account => {
        return (
            <h2 key={account.id}>{account.name} <button onClick={() => {
                props.deleteAccount(account.id)
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

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAccount: (id) => {
            dispatch(DELETE_ACCOUNT_ACTION(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
