import './Messages.css';
import { Message } from '../message/Message';

export const Messages = ({ messageList }) => {
    return (
        <div className="messages">
            {
                messageList.map((message) => <Message key={message.id} {...message} />)
            }
        </div>
    )
}

Messages.defaultProps = {
    messageList: []
};
