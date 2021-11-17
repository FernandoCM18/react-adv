import { Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        <li>
                            <NavLink 
                                to="/"
                                className={ ({isActive}) => isActive ? 'nav-active' : ''}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about"
                                className={ ({isActive}) => isActive ? 'nav-active' : ''}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/users"
                                className={ ({isActive}) => isActive ? 'nav-active' : ''}
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="about" element={<h1>About</h1>} />
                <Route path="users" element={<h1>Users</h1>} />
            </Routes>
        </>
    );
}
