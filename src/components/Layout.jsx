import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <div className="container-fluid gx-0">
      <Header />
      <div className="content container-fluid gx-0 gy-0">
        <Outlet />
      </div>
      <section className="container-fluid footerContainer">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;