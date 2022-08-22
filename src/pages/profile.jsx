import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../redux/actions/profile/profile-actions';

const Profile = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setName = useCallback(() => {
        dispatch(changeName(value));
    }, [dispatch, value]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <div className="profile">
            <h3>Profile</h3>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
        </div>
    );
}

export { Profile }