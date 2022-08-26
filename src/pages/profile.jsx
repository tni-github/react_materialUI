import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeName } from '../redux/actions/profile/profile-actions';

const Profile = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setName = useCallback(() => {
        dispatch(changeName(value));
        setValue('');
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
                placeholder="Введите имя, иначе кнопка будет неактивна"
            />
            <div>
                <button onClick={setName} disabled={!value}>Change Name</button>
            </div>
        </div>
    );
}

export { Profile }