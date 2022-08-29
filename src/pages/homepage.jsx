import { Form } from '../components/form/Form';
import CssBaseline from '@mui/material/CssBaseline';
import { Messages } from '../components/messages/Messages';
import { AUTHOR } from '../constants/constants.js';
import { useCallback, useState } from 'react';
import { Chats } from './chats';
import { useSelector, useDispatch } from 'react-redux';
import { getChats } from '../redux/selectors/getChats-selector';
import { addMessageWithThunk } from '../redux/actions/messages/messagees-actions';

const Homepage = () => {
    const [messageList, setMessageList] = useState([]);
    const chats = useSelector(getChats);
    const dispatch = useDispatch();

    const onAddMessage = useCallback((chatId, message) => {
        dispatch(addMessageWithThunk(chatId, message));
    }, [dispatch])

    const handleSendMessage = (msg) => {
        setMessageList((prevMessageList) => ([
            ...prevMessageList,
            {
                author: AUTHOR,
                text: msg,
                id: prevMessageList.length
            }
        ]));
    }

    return (
        <div className="App__homepage">
            <CssBaseline />
            <div className="container">
                <div className="message__list">
                    <div className="chatlist">
                        <Chats chats={chats} messageList={messageList} />
                    </div>
                    <Messages messageList={messageList} />
                </div>
            </div>
            <Form onSendMessage={handleSendMessage} />
        </div>
    );
}

export { Homepage }