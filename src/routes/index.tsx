import { Suspense } from 'react';
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Logo from '../assets/react.svg';
import { activeNavlink } from '../utils/active-navlink';
import { routes } from './routes';

const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={name}>
                  <NavLink to={to} className={activeNavlink}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, name, Component }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
