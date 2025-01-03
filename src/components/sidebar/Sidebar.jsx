import React, {useState} from "react";
import "./sidebar.css";
import Logo from "../../assets/dlogo.png";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href="#home" className="nav_logo">
                <img src={Logo} alt="" />
            </a>
            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#work" className="nav_link">
                                <i className="icon-folder"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="fas fa-laptop-code"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#codePlatform" className="nav_link">
                                <i className="fas fa-terminal"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#awards" className="nav_link">
                                <i className="icon-trophy"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav_footer">
                <span className="copyright">&copy; 2025.</span>
            </div>
        </aside>
        <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
        </>
    )
}

export default Sidebar