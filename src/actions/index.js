import { APP_INIT } from './types';

export const onChangeEmail = (email) => ({
    type: APP_INIT,
    payload: email
});
