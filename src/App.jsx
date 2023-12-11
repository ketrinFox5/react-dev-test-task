import './App.scss';
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Users from './components/Users'
import usersList from './users.json';
import SearchUser from './components/SearchUser';
import AddUser from './components/AddUser';
import Message from './components/Message';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isOpenAddUser, setIsOpenAddUser] = useState(false);
  const [successAddUser, setSuccessAddUser] = useState(false);
  const [successDeleteUser, setSuccessDeleteUser] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const usersData = localStorage.getItem('usersData');
    if (usersData === null) {
      const api =  new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(usersList)
        }, 1000);
      });

      api.then(usersData => {
        setUsers(usersData);
        setUser(usersData[0]);
        localStorage.setItem('usersData', JSON.stringify(usersData));
      });
    } else {
      
      setUsers(JSON.parse(usersData));
      setUser(JSON.parse(usersData)[0]);
    }
  }, []);
  
  const resultsSearch = (results) => {
    if (results.length === 0) {
      setUsers(usersList);
    } else {
      setUsers(results);
    }
  }

  const openAddUser = () => {
    setIsOpenAddUser(!isOpenAddUser);
  }

  const closeAddUser = () => {
    setIsOpenAddUser(false);
  }

  const addNewUser = (newUser) => {
    setMessage(`Приглашение отправлено на почту ${newUser.email}`) ;
    const updateUsers = [newUser, ...users];
    setUsers(updateUsers);
    localStorage.setItem('usersData', JSON.stringify(updateUsers));
    setSuccessAddUser(!successAddUser);
  }

  const closeMessage = () => {
    setSuccessAddUser(false);
    setSuccessDeleteUser(false);
  }

  const deleteUser = (deletedUser) => {
    const updateUsers = users.filter((user) => user.id !== deletedUser.id);
    setUsers(updateUsers);
    localStorage.setItem('usersData', JSON.stringify(updateUsers));
    setMessage('Пользователь успешно удален');
    setSuccessDeleteUser(!successDeleteUser);
  }

  const updateUser = (userInfo) => {
    const updateUsers = users.map((user) => {
      if (user.id === userInfo.id) {
        return {...user, ...userInfo};
      }
      return user;
    });
    setUsers(updateUsers);
    localStorage.setItem('usersData', JSON.stringify(updateUsers));
  }

  return (
    <div className="App">
      <Sidebar user={user}/>
      <div className="App__content">
      <div className="header">
            <h1 className="title">
                Команда
            </h1>
            <div className="header__btns">
                <SearchUser resultsSearch={resultsSearch}/>
                <button className="btn-user-add" onClick={() => openAddUser()}>
                    Добавить пользователя
                </button>
            </div>
        </div>
        <Users users={users} deleteUser={deleteUser} updateUser={updateUser}/>
        {isOpenAddUser && <AddUser closeAddUser={closeAddUser} addNewUser={addNewUser}/>}
        {(successAddUser || successDeleteUser) && <Message message={message} closeMessage={closeMessage}/>}
      </div>
    </div>
  )
}

export default App
