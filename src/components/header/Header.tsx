import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/car" data-testid="shopping-cart-button">Carrinho de Compras</NavLink>
    </nav>

  );
}

export default Header;
