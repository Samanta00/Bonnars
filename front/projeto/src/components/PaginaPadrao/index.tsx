import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function PaginaPadrao() {
  return(
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}