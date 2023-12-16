import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import PaginaPadrao from '../../components/PaginaPadrao';
import Carrinho from '../../pages/carrinho';
import Catalogo from '../../pages/catalogo';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<PaginaPadrao/>} >
            <Route index element={<Home/>}/> 
            <Route path='carrinho' index element={<Carrinho/>}/>
            <Route path='catalogo' index element={<Catalogo/>}/>
        </Route>
    
      </Routes>
    </Router> 

  );
}

