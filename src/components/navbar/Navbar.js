import React from 'react'
import image1 from '../../asset/image1.svg'
import './Navbar.css'

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className='navbar'>
            <div>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Subcribers</a>
                <a href="#">Video Managements</a>
                <a className="active_link" href="#">Admin</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <img width="30" src={image1} alt="image" />
                </a>
            </div>
            
        </nav>
    )
}

export default Navbar
