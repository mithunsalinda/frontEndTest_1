import actionTypes from "./index"

const userCreate = (payload) => ({
    type: actionTypes.USER_CREATE,
    payload: payload
});

export default {
    userCreate,
};