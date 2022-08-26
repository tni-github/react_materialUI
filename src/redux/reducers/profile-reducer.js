import { NAME_ACTION, CHANGE_NAME } from "../actions/profile/profile-actionTypes";

const initialState = {
    showName: false,
    name: 'user'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_ACTION:
            return { ...state, showName: !state.showName }
        case CHANGE_NAME:
            return { ...state, name: action.payload }
        default:
            return state;
    }
}