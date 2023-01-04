import { Outlet, NavLink } from "react-router-dom";
import '../App.css';

function Layout() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="nav-articles">Articles</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}
export default Layout;