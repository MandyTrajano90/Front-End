import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Car from './pages/Car';

function App() {
  return (

    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/car" element={ <Car /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Route>
    </Routes>

  );
}

export default App;
