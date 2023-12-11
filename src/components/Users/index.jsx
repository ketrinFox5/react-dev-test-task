import { useEffect, useState } from 'react'
import UserCard from '../UserCard/index';
// import usersData from '../../users.json';

const Users = ({users, deleteUser, updateUser}) => {
    const deleteCurrentUser = (user) => {
        deleteUser(user)
    }

    const updateUserInfo = (user) => {
        updateUser(user);
    }

    return(
        <div>
            { users.map((user) => (
                <UserCard user={user} key={user.id} deleteUser={deleteCurrentUser} updateUser={updateUserInfo}/>
            ))}
        </div>
    )
}

export default Users