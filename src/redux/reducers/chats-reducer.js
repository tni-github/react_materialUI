import { ADD_CHAT } from "../actions/chats/chat-actions";

const initialChats = [
    {
        chatId: "1",
        name: "Chat 1",
        messages: [{ text: "First Message", author: "user" }, { text: "Hello", author: "bot" }]
    },

    {
        chatId: "2",
        name: "Chat 2",
        messages: [{ text: "One More Message", author: "user" }, { text: "Hello", author: "bot" }]
    }
];

export const chatsReducer = (state = initialChats, action) => {

    switch (action.type) {
        case ADD_CHAT:
            return [
                ...state,
                action.chat
            ]
        default:
            return state;
    }
}