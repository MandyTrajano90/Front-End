import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

function Header() {
  return (
    <nav className={ styles.container }>
      <NavLink to="/" className={ styles.homeLink }>Home</NavLink>
      <img src={ logo } alt="logo" height="55px" width="180px" />
      <NavLink
        data-testid="shopping-cart-button"
        to="/car"
        className={ styles.checkout }
      >
        <img src="./src/assets/carrinho.svg" alt="carrinho" />
      </NavLink>
    </nav>

  );
}

export default Header;
