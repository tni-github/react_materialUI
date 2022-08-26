
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { Chat } from './chat';
import { addChat } from '../redux/actions/chats/chat-actions';

export const Chats = ({ chats }) => {

    const dispatch = useDispatch();

    const handleAddChat = () => {
        dispatch(addChat(value));
    }

    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <div className="chatlist__wrapper">

            <label>Для добавления чата введите его имя в окне ниже <span>(иначе кнопка добавления будет неактивна)</span>:</label>
            <input type="text"
                value={value}
                onChange={handleChange}>
            </input>

            <button onClick={handleAddChat} disabled={!value}>Добавить чат</button>
            <div className="chatlist__items">
                {
                    chats.map((chat) => {
                        return <Chat key={chat.chatId} {...chat} />
                    })
                }
            </div>
        </div >
    )
}

Chats.defaultProps = {
    chats: [],
};