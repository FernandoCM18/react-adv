import { Suspense } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react logo" />
                    <ul>
                        {
                            routes.map(({path, name}) => (
                                <li key={path}>
                                    <NavLink 
                                        to={path}
                                        className={ ({isActive}) => isActive ? 'nav-active' : ''}
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Routes>
                    {
                        routes.map(({path, component:Component }) => (
                            <Route 
                                key={path} 
                                path={path} 
                                element={<Component/>}
                            />
                        ))
                    }
                    <Route path='/' element={<Navigate to={routes[0].path} />} />
                </Routes>
            </div>
        </Suspense>
    );
}