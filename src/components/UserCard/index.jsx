import { useState } from 'react'
import Permission from '../Permission';
import defaultUserImg from '../../assets/img/no-img.svg';
import btnEditUser from '../../assets/img/btn-modal.svg';
import EditUser from '../EditUser';
import EditUserPermissions from '../EditUserPermissions';

const UserCard = ({user, deleteUser, updateUser}) => {
    
    const [userInfo, setUserInfo] = useState(user);
    const [isOpenEditUser, setIsOpenEditUser] = useState(false);
    const [isOpenEditPermissions, setIsOpenEditPermissions] = useState(false);

    const openEditUser = () => {
        setIsOpenEditUser(!isOpenEditUser);
    }
    const closeEditUser = () => {
        setIsOpenEditUser(false);
    }

    const deleteCurrentUser = () => {
        deleteUser(user);
    }
    const openEditPermissions = () => {
        setIsOpenEditPermissions(!isOpenEditPermissions);
        closeEditUser();
    }
    const closeEditPermissions = () => {
        setIsOpenEditPermissions(false);
    }
    const checkedPermissions = (permissions) => {
        const updateUserInfo = {...userInfo, permissions: permissions}
        setUserInfo(updateUserInfo);
        updateUser(updateUserInfo);
    }

    return(
        <div className="user">
            <div className="user__card">
                <div className="user__image">
                    <img src={userInfo.image ? userInfo.image : defaultUserImg} alt="" />
                </div>
                <div className="user__info">
                    <div className="user__info-text">
                        <div className="user__info-name">
                            {userInfo.name ? userInfo.name : "Пользователь"}
                        </div>
                        {!userInfo.verification && 
                            <div className="user__info-verification">
                                Не авторизован
                            </div>
                        }
                        <div className="user__info-email">
                            {userInfo.email}
                        </div>
                    </div>
                    <div className="user__info-permissions">
                        {userInfo.permissions.map((permission) => (
                            <Permission permission={permission} key={permission}/>
                        ))}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <button className="user__btn-edit" onClick={() => openEditUser()}>
                <img src={btnEditUser} alt="" />
            </button>
            {isOpenEditUser && <EditUser user={userInfo} closeEditUser={closeEditUser} deletedUser={deleteCurrentUser} editPermissions={openEditPermissions}/>}
            {isOpenEditPermissions && <EditUserPermissions checkedPermissions={checkedPermissions} userPermissions={userInfo.permissions} onCloseModal={closeEditPermissions}/>}
        </div>
    )
}

export default UserCard