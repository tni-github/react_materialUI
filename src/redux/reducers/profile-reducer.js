import { NAME_ACTION } from "../actions/profile-actionTypes";

const initialState = {
    showName: false,
    name: 'My Name'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_ACTION:
            return { ...state, showName: !state.showName }
        default:
            return state;
    }
}