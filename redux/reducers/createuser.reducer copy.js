import actionTypes from "../actions"
const init = {
    firstName: '',
    lastName: '',
    email: '',
    nameForm: false,
    emailForm: false,
}


export const userReducer = (init, {
    [actionTypes.USER_CREATE](state, actions) {
        let object = {}
        switch (actions.payload.type) {
            case 'firstName':
                object = { firstName: actions.payload.firstName };
                break;
            case 'lastName':
                object = { lastName: actions.payload.lastName };
                break;
            default:
                break;
        }
        return {
            ...state,
            ...object
        };
    }
});
export default userReducer;