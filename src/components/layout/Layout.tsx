import {Outlet} from 'react-router';
import SideNav from '../SideNav';

const Layout = () => {
    return (
        <div className="App">
            <SideNav />
            <main className="site-main">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
