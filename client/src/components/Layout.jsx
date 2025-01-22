import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main>
        <Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout;
