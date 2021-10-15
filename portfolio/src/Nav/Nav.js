import Logo from './Components/Logo/Logo';
import NavBar from './Components/NavBar/NavBar';
import './Nav.css';

const Nav = () => (
    <header className="nav">
        <div className="nav__left">
          <Logo />
        </div>
        <div className="nav__right">
          <NavBar />
        </div>
  </header>
);

export default Nav;
