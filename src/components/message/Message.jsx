import './Message.css';
import { AUTHOR, BOT } from '../../constants/constants';
import { useSelector } from 'react-redux';
import { getProfileName } from '../../redux/selectors/getProfileName-selector';

export const Message = ({ author, text }) => {
    const profileName = useSelector(getProfileName);
    const authorType = author === AUTHOR ? profileName : BOT;

    return (
        <div className={`message ${author}`}>
            <span>{authorType}: </span>
            <span>{text}</span>
        </div>
    )
}
