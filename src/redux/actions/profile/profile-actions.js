import { NAME_ACTION, CHANGE_NAME } from './profile-actionTypes';

export const nameOpen = () => ({
    type: NAME_ACTION
});

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
});
