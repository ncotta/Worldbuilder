import Navbar from '../Navbar/Navbar';
import CategoryNavbar from '../CategoryNavbar/CategoryNavbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <main>
        <Navbar />
        <CategoryNavbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default AppLayout;