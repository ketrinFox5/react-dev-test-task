import { useState } from 'react'
import SelectPermissions from '../SelectPermissions';
import iconClose from '../../assets/img/icon-close.svg';

const AddUser = ({closeAddUser, addNewUser}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPermissions, setUserPermissions] = useState([]);
    const selectPermissions = (permissions) => {
        setUserPermissions(permissions);
    }
    const close = () => {
        closeAddUser();
    }
    const addUser = (event) => {
        event.preventDefault();
        const permissions = [];
        userPermissions.map((item) => {
            permissions.push(item.value);
        })
        const newUser = {
            id: Math.random(),
            email: userEmail,
            permissions: permissions,
            verification: false
        }
        addNewUser(newUser);
        closeAddUser();
    }
    return(
        <div className="add-user">
            <button className="btn-close" onClick={() => close()}>
                <img src={iconClose} alt="" />
            </button>
            <h2>
                Отправьте приглашение
            </h2>
            <form className="add-user__form" onSubmit={addUser}>
                <input type="email" name="email" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="add-user__form-field field" />
                <SelectPermissions selectPermissions={selectPermissions}/>
                <button className="btn-modal" type="submit">
                    Отправить приглашение
                </button>
            </form>
        </div>
    )
}

export default AddUser