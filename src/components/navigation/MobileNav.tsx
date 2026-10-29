import { NavLink } from 'react-router';

const MobileNav = () => {
    return (
        <div className="MobileNav">
            <nav className="MobileNavLinks">
                <NavLink to="/" end className="SideNavLink">Home</NavLink>
                <NavLink to="/projects" className="SideNavLink">Projects</NavLink>
                <NavLink to="/skills" className="SideNavLink">Skills and Experience</NavLink>
            </nav>
        </div>
  );
};

export default MobileNav;
