import actionTypes from "../actions"
import createReducer from "../../lib/createReducer";
const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    nameForm: true,
    emailForm: false,
    confirmedForm: false
}

export const userReducer = createReducer(initialState, {
    [actionTypes.USER_CREATE](state, actions) {
        let object = {}
        switch (actions.payload.type) {
            case 'firstName':
                object = { firstName: actions.payload.firstName };
                break;
            case 'lastName':
                object = { lastName: actions.payload.lastName };
                break;
            case 'email':
                object = { email: actions.payload.email };
                break;
            case 'nameForm':
                object = { nameForm: actions.payload.nameForm };
                break;
            case 'emailForm':
                object = { emailForm: actions.payload.emailForm };
                break;
            case 'confirmedForm':
                object = { confirmedForm: actions.payload.confirmedForm };
                break;
            default:
                break;
        }
        return {
            ...state,
            ...object
        };
    },

});