const Permission = ({permission}) => {
    const isAdmin = permission === "Администратор";
    return(
        <div className={`permission ${isAdmin ? 'permission-admin' : ''}`}>
            {permission}
        </div>
    )
}

export default Permission