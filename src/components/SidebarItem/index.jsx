const SidebarItem = ({item}) => {
    return(
        <div className="sidebar__item">
                    <img src={item.icon} alt="" />
                    <div className="sidebar__item-name">
                       {item.name}
                    </div>
                </div>
    )
}

export default SidebarItem