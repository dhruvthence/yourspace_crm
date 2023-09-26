import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../../helpers/constants/sidebar-items";
import { useEffect, useState } from "react";

function Sidebar() {
    const [menuItems, setMenuItems] = useState([]);
    const { pathname } = useLocation();

    useEffect(() => {
        setupMenuItems();
    }, [pathname])

    const setupMenuItems = () => {
        const [, route] = pathname.split('/');

        if (route) {
            const updatedMenuItems = updateMenuItems([...sidebarItems], route);
            setMenuItems(updatedMenuItems);
        }
    }

    // Set Active Routes
    const updateMenuItems = (items, route) => {
        return items.map(item => {
            // allowRoutes
            if (item.subItem && item.subItem.length > 0 && item.allowRoutes.includes(route)) {
                let updatedSubItems = updateMenuItems(item.subItem, route);
                updatedSubItems = updatedSubItems.map(subItem => {
                    if (subItem.allowRoutes.includes(route)) {
                        return { ...subItem, isActive: true };
                    } else {
                        return { ...subItem, isActive: false };
                    }
                });

                return { ...item, subItem: updatedSubItems, isActive: true };
            } else {
                return { ...item, isActive: false };
            }
        });
    };

    // Active Sub Menu
    const openSubMenu = (key) => {
        let menuItemList = [...menuItems];

        menuItemList[key].isShowSubMenu = menuItemList[key].isShowSubMenu ? false : true;
        setMenuItems(menuItemList);
    }

    return (
        <nav id="sidebar" className="left-bar">
            <div className="custom-menu">
                <button type="button" id="sidebarCollapse" className="btn btn-primary">
                    <i className="fa fa-bars"></i>
                    <span className="sr-only">Toggle Menu</span>
                </button>
            </div>
            <div className="left-menu-box">
                <h1>
                    <Link to={'/'} className="logo main_logo">
                        <img src="/images/logo.svg" alt="" />
                    </Link>
                </h1>
                <ul className="list-unstyled components mb-5">
                    {
                        menuItems.map((item, index) => (item?.subItem && item?.subItem.length > 0) ? (
                            // Menu with items
                            <li key={item?.key} className={item?.isActive ? 'active' : ''}>
                                <a href="#" className="dropdown-toggle" onClick={() => openSubMenu(index)}>
                                    <span><img src={'/images/' + item?.icon} alt={item?.label} /></span>
                                    {item?.label}
                                </a>

                                {/* show */}
                                <ul className={`collapse list-unstyled ${item?.isShowSubMenu ? 'show' : ''}`}>
                                    {
                                        item?.subItem.map((subMenu) =>
                                            <li key={subMenu?.key} className={(subMenu?.isActive) ? 'active' : ''}>
                                                <Link to={subMenu?.path}>
                                                    <img className="mr-2" src={'/images/' + subMenu?.icon} alt={subMenu?.label} /> {subMenu?.label}
                                                </Link>
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                        ) : (
                            // Menu without item
                            <li key={item?.key} className={item?.isActive ? 'active' : ''}>
                                <Link to={item?.path}>
                                    <span><img src={'/images/' + item?.icon} alt={item?.label} /></span>
                                    {item?.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
