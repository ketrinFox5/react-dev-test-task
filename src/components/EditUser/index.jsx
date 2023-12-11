const EditUser = ({user, closeEditUser, deletedUser, editPermissions}) => {
    const deleteUser = () => {
        deletedUser();
        closeEditUser();
    }

    const openEditPermissions = () => {
        editPermissions();
    }

    return(
        <div className="user__edit modal">
            <button className="user__edit-btn" onClick={() => openEditPermissions()}>
                Изменить права доступа
            </button>
            <button className="user__edit-btn">
                Отправить код повторно
            </button>
            <button className="user__edit-btn" onClick={() => deleteUser()}>
                Удалить
            </button>
        </div>
    )
}

export default EditUser