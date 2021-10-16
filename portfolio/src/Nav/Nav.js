import Logo from './Components/Logo/Logo';
import NavBar from './Components/NavBar/NavBar';
import './Nav.css';

const Nav = ({
  currentPage,
  changePage
}) => (
    <header className="nav">
        <div className="nav__left">
          <Logo />
        </div>
        <div className="nav__right">
          <NavBar currentPage={currentPage} changePage={changePage} />
        </div>
  </header>
);

export default Nav;
