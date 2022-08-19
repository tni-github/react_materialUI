import { Form } from '../components/form/Form';
import CssBaseline from '@mui/material/CssBaseline';
/* import { List, ListItem } from '@mui/material'; */
import { Messages } from '../components/messages/Messages';
import { AUTHOR, BOT } from '../constants/constants.js';
import { useEffect, useState } from 'react';
import { Chats } from './chats';

let timer;

const Homepage = () => {
    const [messageList, setMessageList] = useState([]);

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
                    {/* <List
                        sx={{ width: '100%', minHeight: 'calc(100vh - 180px)', bgcolor: '#fff', padding: '20px 10px' }}
                        chats={chats}>
                        {(chat) => (
                            <ListItem sx={{
                                fontSize: '14px'
                            }}
                                alignItems="left"
                                {...chat}>
                            </ListItem>
                        )}
                    </List> */}
                    <div className="chatlist"><Chats /></div>
                    <Messages messageList={messageList} />
                </div>
            </div>
            <Form onSendMessage={handleSendMessage} />
        </div>
    );
}

export { Homepage }