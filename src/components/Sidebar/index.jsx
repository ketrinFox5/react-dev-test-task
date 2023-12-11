import { useEffect, useState } from 'react';
import logoImg from '../../assets/img/logo.svg';
import { sidebarMenu } from '../../utils';
import SidebarItem from '../SidebarItem';

const Sidebar = ({user}) => {
    const [userInfo, setUserInfo] = useState(user);
    useEffect(() => {
        setUserInfo(user)
    }, [user]);

    return(
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logoImg} alt="" />
            </div>
            <div className="sidebar__avatar">
                <img src={userInfo && userInfo.image} alt="" />
            </div>
            <div className="sidebar__menu">
                {sidebarMenu.map((item) => (
                    <SidebarItem item={item} key={item.icon}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar

