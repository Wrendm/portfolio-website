import Stack from '@mui/material/Stack';
import {FaLinkedin, FaGithub} from "react-icons/fa6";
import {NavLink} from 'react-router';

const SideNav = () => {
    return (
        <aside className="SideNav">
            <nav className="SideNavLinks">
                <NavLink to="/" end className="SideNavLink">Home</NavLink>
                <NavLink to="/projects" className="SideNavLink">Projects</NavLink>
            </nav>
            <div className="SideNavTitle">
                <div className="socialLinks">
                    <a href="https://linkedin.com/in/wren-miles-529595208">
                        <FaLinkedin color="var(--text)" size={28} />
                    </a>
                    <a href="https://github.com/Wrendm">
                        <FaGithub color="var(--text)" size={28} />
                    </a>
                </div>
                <h4>Wren Miles Web Solutions</h4>
            </div>
        </aside>
    )
}

export default SideNav;
