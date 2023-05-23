import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';

function App() {
  const { isGettingUser } = useUserContext();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {!isGettingUser ? (
        '로딩중입니다'
      ) : (
        <>
          <CartContextProvider>
            <Navbar />
            <Outlet />
          </CartContextProvider>
          <Footer />
        </>
      )}
    </QueryClientProvider>
  );
}

export default App;
