import './Message.css';
import { AUTHOR, BOT } from '../../constants/constants';
import { useSelector } from 'react-redux';

export const Message = ({ author, text }) => {
    const profileName = useSelector((state) => state.name);
    const authorType = author === AUTHOR ? profileName : BOT;

    return (
        <div className={`message ${author}`}>
            <span>{authorType}: </span>
            <span>{text}</span>
        </div>
    )
}
