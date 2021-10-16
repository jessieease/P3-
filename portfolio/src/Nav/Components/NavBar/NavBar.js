import Item from '../NavBar/Item/Item';
import { PAGE } from '../../../constants';
import './NavBar.css';

const ITEM = [{
  key: PAGE.HOME,
  text: 'Home',
}, {
  key: PAGE.RESUME,
  text: 'Resume',
}, {
  key: PAGE.SERVICE,
  text: 'Service',
}];

const NavBar =({
  currentPage,
  changePage
}) => (
  <div className="navbar">
    {ITEM.map((item) => (
      <Item
      key={item.key}
      active={ currentPage === item.key } 
      onClick={() => changePage(item.key)}
    >
      {item.text}
    </Item>
    ))}

  </div>
); 

export default NavBar;
