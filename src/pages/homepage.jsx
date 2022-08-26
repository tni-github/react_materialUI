import { Form } from '../components/form/Form';
import CssBaseline from '@mui/material/CssBaseline';
import { Messages } from '../components/messages/Messages';
import { AUTHOR, BOT } from '../constants/constants.js';
import { useEffect, useState } from 'react';
import { Chats } from './chats';
import { useSelector } from 'react-redux';
import { getChats } from '../redux/selectors/getChats-selector';

let timer;

const Homepage = () => {
    const [messageList, setMessageList] = useState([]);
    const chats = useSelector(getChats);

    useEffect(() => {
        timer = setTimeout(() => {
            if (messageList[messageList.length - 1]?.author === AUTHOR) {
                clearTimeout(timer);

                setMessageList((prevMessageList) => ([
                    ...prevMessageList,
                    {
                        author: BOT,
                        text: "Здравствуйте, я БОТ. Могу чем-то помочь?",
                        id: prevMessageList.length
                    }
                ]))
            }
        }, 1500);

        return () => {
            clearTimeout(timer);
        };

    }, [messageList]);

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