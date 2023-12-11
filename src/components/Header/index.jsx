import SearchUser from '../SearchUser'

const Header = () => {
    return(
        <div className="header">
            <h1 className="title">
                Команда
            </h1>
            <div className="header__btns">
                <SearchUser/>
                <button className="btn-user-add">
                    Добавить пользователя
                </button>
            </div>
        </div>
    )
}

export default Header