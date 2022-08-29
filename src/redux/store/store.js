import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "../reducers/profile-reducer";
import { chatsReducer } from "../reducers/chats-reducer";
import { messagesReducer } from "../reducers/messages-reducer";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);