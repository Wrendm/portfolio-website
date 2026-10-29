import {Outlet} from 'react-router';
import Nav from '../navigation/Nav';

const Layout = () => {
    return (
        <div className="App">
            <Nav />
            <main className="site-main">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
