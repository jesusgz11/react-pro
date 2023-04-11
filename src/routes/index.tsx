import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Logo from '../assets/react.svg';
import { activeNavlink } from '../utils/active-navlink';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={activeNavlink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeNavlink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={activeNavlink}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>About page</h1>} />
          <Route path="users" element={<h1>Users page</h1>} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
