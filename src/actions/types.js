export const APP_INIT = '[APP] INIT';
export const APP_INIT_SUCCESS = '[APP] INIT_SUCCESS';
export const APP_INIT_FAILURE = '[APP] INIT_FAILURE';

export const onChangePassword = (password) => ({
    type: APP_INIT,
    payload: password
});
