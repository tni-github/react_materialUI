import { ADD_CHAT } from "../actions/chats/chat-actions";

const initialState = {
    chatList: []
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: { ...state.chatList },
                id: `id ${state.chatList.length}`,
                name: action.name
            }
        default:
            return state;
    }
}