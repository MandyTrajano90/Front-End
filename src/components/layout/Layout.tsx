import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <span>Trybe - todos os direitos reservados</span>
      </footer>
    </>
  );
}

export default Layout;
