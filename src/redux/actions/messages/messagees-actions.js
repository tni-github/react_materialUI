import { BOT } from "../../../constants/constants";

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const addMessageWithThunk = (chatId, message) => (dispatch, _) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== BOT) {
        const botMessage = `Здравствуйте, я БОТ. Могу чем-то помочь?`;
        const timer = setTimeout(() =>
            dispatch(addMessage(chatId, botMessage)), 1500);
        return () => clearTimeout(timer);
    };
}