
import { useEffect, useState } from 'react';
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
    const [chats, setChats] = useState(initialChats);

    useEffect(() => {
        setChats(chats)
    }, [chats]);

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