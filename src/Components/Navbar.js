import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="navBar">
            <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>      
            </Link>            
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <u1 className = 'nav-menu-items'>
                <li className = 'navbar-toggle' onClick={showSidebar}>
                    <Link to = "#" className = 'menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                 {SidebarData.map((item, index) => {
                    return (
                       <li key={index} className= {item.cName}>
                           <Link to = {item.path}>
                               <span>{item.title}</span>
                           </Link>
                       </li>
                    )
                })}
            </u1>
        </nav>
        </>
    )
}

export default Navbar; 