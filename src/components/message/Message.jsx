import './Message.css';
import { AUTHOR, BOT } from '../../constants/constants';

export const Message = ({ author, text }) => {

    const authorType = author === AUTHOR ? AUTHOR : BOT;

    return (
        <div className={`message ${authorType}`}>
            <span>{author}: </span>
            <span>{text}</span>
        </div>
    )
}
