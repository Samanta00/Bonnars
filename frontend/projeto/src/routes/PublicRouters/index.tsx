import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home';
import PaginaPadrao from '../../components/PaginaPadrao';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<PaginaPadrao/>} >
            <Route index element={<Home/>}/> 
        </Route>
    
      </Routes>
    </Router> 

  );
}

