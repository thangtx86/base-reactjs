import { APP_INIT } from '../actions/types';
const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    errorMessage: ''
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case APP_INIT:
            return { ...state, email: payload };
        default:
            return state;
    }
};
