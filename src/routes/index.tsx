import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Logo from '../assets/react.svg';
import { activeNavlink } from '../utils/active-navlink';
import {LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/lazy1" className={activeNavlink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={activeNavlink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={activeNavlink}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="lazy1" element={<LazyPage1/>} />
          <Route path="lazy2" element={<LazyPage2/>} />
          <Route path="lazy3" element={<LazyPage3/>} />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
