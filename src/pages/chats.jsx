
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Chat } from './chat';

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

export const Chats = () => {
    const { chatId } = useParams();

    const [chats, setChats] = useState(initialChats);

    return (
        <div className="chatlist">
            {chats.map((chat) => {
                return <Chat key={chat.chatId} chat={chat} />
            })
            }
        </div>
    )
}

Chats.defaultProps = {
    chats: [],
};