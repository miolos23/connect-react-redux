import { DELETE_ACCOUNT } from "./accountsActionTypes";

export const DELETE_ACCOUNT_ACTION = (id) => {
    return {
        type: DELETE_ACCOUNT,
        payload: {
            id: id
        }
    }
}