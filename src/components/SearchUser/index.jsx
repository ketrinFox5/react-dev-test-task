import iconSearch from '../../assets/img/icon-search.svg';
import { useEffect, useState } from 'react';

const SearchUser = ({resultsSearch}) => {
    const [isShowInput, setIsShowInput] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('usersData')));
    const handleShowInput = () => {
        setIsShowInput(!isShowInput);
    }

    const searchUser = () => {
        console.log(searchValue)
        if (searchValue === '') {
            return updateUsers([]);
        } 
        const filteredUsers = users.filter(user => 
            user.email.toLowerCase().includes(searchValue)
        );
        setUsers(filteredUsers);
        updateUsers(users);
    }

    const updateUsers = (results) => {
        resultsSearch(results);
    }

    useEffect(() => {
        if (users.length !== 0 ) {
            searchUser();
        }
        
    }, [searchValue])

    return(
        <div className="user__search">
            {isShowInput && <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} id="searchInput" placeholder="Поиск по Email" className="user__search-input field"/>}
            <button className="user__search-btn" onClick={() => handleShowInput()}>
                <img src={iconSearch} alt="" />
            </button>
        </div>
    )
}

export default SearchUser