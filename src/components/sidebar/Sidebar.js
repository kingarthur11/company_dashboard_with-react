import "./Sidebar.css"
import logo from "../../asset/image3.jpg"

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return (        
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Coder bite</h1>
                </div>
                <i className="fa fa-times"
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}>
                </i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link"> 
                    <i className="fa fa-home"></i>
                        <a href="#">DashBoard</a>
                </div>
                <h2>mng</h2>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Company Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Employee Management</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Warehouse</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Contracts</a>
                </div>
                <h2>LEAVE</h2>
                <div className="sidebar__link">
                    <i className="fa fa-questions"></i>
                    <a href="#">Requests</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calender-check-o"></i>
                    <a href="#">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calender-files-o"></i>
                    <a href="#">Apply for leave</a>
                </div>
                <h2>PAYROLL</h2>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payroll</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">Paygrade</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
           