import { useSelector, useDispatch } from 'react-redux';
import { nameOpen } from '../redux/actions/profile-actions';

const Profile = () => {

    const showName = useSelector((state) => state.showName);
    const name = useSelector((state) => state.name);
    const dispatch = useDispatch();

    const toggleShowName = () => {
        dispatch(nameOpen());
    };

    return (
        <div className="profile">
            <h3>Profile</h3>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={toggleShowName}
            />
            <span>Show Name</span>
            {showName && <div> {name} </div>}
        </div>
    );
}

export { Profile }