import Item from '../NavBar/Item/Item';
import './NavBar.css';

const NavBar =() => (
    <div className="navbar">
    <Item active href="HOME">Home</Item>
    <Item href="RESUME" children="Resume" />
    <Item href="SERVICES" children="Services" />
    </div>
);

export default NavBar;
