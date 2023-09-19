import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink data-testid="shopping-cart-button" to="/car">Carrinho de Compras</NavLink>
    </nav>

  );
}

export default Header;
