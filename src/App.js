import { useEffect, useState } from 'react';
import './App.css';
import { Messages } from './components/messages/Messages';
import { Form } from './components/form/Form';
import { AUTHOR, BOT } from './constants/constants';
import CssBaseline from '@mui/material/CssBaseline';
import { List, ListItem } from '@mui/material';

let timer;

function App() {
  const [messageList, setMessageList] = useState([]);

  const [chats, setChats] = useState([{ name: '', id: '' }])

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
    <div className="App">
      <CssBaseline />
      <div className="container">
        <div className="message__list">
          <List
            sx={{ width: '100%', minHeight: 'calc(100vh - 117px)', bgcolor: '#fff', padding: '10px' }}
            chats={chats}>
            {(chat) => (
              <ListItem sx={{
                fontSize: '14px'
              }}
                alignItems="left"
                {...chat}>
              </ListItem>
            )}
          </List>
          <Messages messageList={messageList} />
        </div>
      </div>
      <Form onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
