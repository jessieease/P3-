/* eslint-disable jsx-a11y/anchor-is-valid */
import './Item.css';

const Item = ({
    active,
    onClick,
    children,
}) => {
    let className = 'navbar__item';
  
    if (active) {
      className += ' navbar__item--active';
    }

    return (
      <a
        onClick={(event) => {
          event.preventDefault();
          onClick();
        }} 
        className={className}
      > 
        {children}
      </a>
    );
  };

export default Item;
