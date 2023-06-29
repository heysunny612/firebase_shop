import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollBtn from './components/ScrollBtn/ScrollBtn';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollBtn />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
