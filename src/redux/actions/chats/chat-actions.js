export const ADD_CHAT = "ADD_CHAT";

export const addChat = (name, messageList) => ({
    type: ADD_CHAT,
    chat: {
        chatId: Date.now(),
        name,
        messages: [{ ...messageList }]
    }
});