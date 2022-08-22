import { combineReducers, createStore } from "redux";
import { profileReducer } from "../reducers/profile-reducer";
import { chatsReducer } from "../reducers/chats-reducer";
import { messagesReducer } from "../reducers/messages-reducer";

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);